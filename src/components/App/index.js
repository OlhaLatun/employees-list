
import { APIservice } from '../../services/api-service'
import { useEffect, useState } from 'react'
import EmployeesList from '../EmployeesList'
import EmployeeDetails from '../EmployeeDetails'

import './App.css';

function App() {

  const [employees, setEmployees] = useState([])
  const [activeEmployees, setActiveEmployees] = useState([])

  const handleActiveEmployees = ({id, isActive}) => {

      const activeEmployee = employees.find(employee => employee.id === id)
      activeEmployee.isActive = !isActive

      if (!isActive) {
        setActiveEmployees(prevState => {
          let exists = prevState.find(employee => employee.id === id)
          if(exists) {
            return prevState
          } else {
           return [...prevState, activeEmployee]
          }
        }) 
      } else {
        setActiveEmployees(prevState => {
          return prevState.filter(employee => employee.id !== id)
        }) 
      }
     
  }

  useEffect(() => {
    const api = new APIservice()

    if (localStorage.getItem('employees')) {
      let employeesFromLocalStorage = JSON.parse(localStorage.getItem('employees'))
      setEmployees(employeesFromLocalStorage)
      setActiveEmployees(employeesFromLocalStorage .filter(employee => employee.isActive === true)) 
    } else {
      api.getMappedEmployees()
        .then(data => {
          setEmployees(data)
          localStorage.setItem('employees', JSON.stringify(data))
        })
      }
    }, [])

  useEffect(() => {
    if (employees.length !== 0) {
      let updated = new Set([...employees, ...activeEmployees])
      localStorage.setItem('employees', JSON.stringify(Array.from(updated)))
    }
  }, [activeEmployees, employees])

  return (
    <div className="app">
       <EmployeesList 
        employees={employees}
        getEmployeeDetails={(details) => handleActiveEmployees(details)} />
       <EmployeeDetails employees={activeEmployees} />  
    </div>
  );
}

export default App;
