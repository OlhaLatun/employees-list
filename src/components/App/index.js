
import { APIservice } from '../../services/api-service'
import { useEffect, useState } from 'react'
import EmployeesList from '../EmployeesList'
import EmployeeDetails from '../EmployeeDetails'
import EmployeeStatusContext from '../../services/context'
import { handleActiveEmployees, changeEmployeeStatus } from '../../Helpers/helpers'
import './App.css';

function App() {

  const [employeeStatus, setEmployeeStatus] = useState({ id: undefined, isActive: false })
  const [employees, setEmployees] = useState([])
  const [activeEmployees, setActiveEmployees] = useState([])

  useEffect(() => {
    if (!employeeStatus.isActive && employeeStatus.id) {
      const activeEmployee = employees.find(employee => employee.id === employeeStatus.id)
      activeEmployee.isActive = !activeEmployee.isActive
      setActiveEmployees(prevState => {
        const exists = prevState.find(employee => employee.id === activeEmployee.id)
        return exists ? prevState : [...prevState, activeEmployee]
      })
    } else {
      setActiveEmployees(prevState => prevState.filter(employee => employee.id !== employeeStatus.id))
    }
  }, [employeeStatus])

  useEffect(() => {
    const api = new APIservice()

    if (localStorage.getItem('employees')) {
      let employeesFromLocalStorage = JSON.parse(localStorage.getItem('employees'))
      setEmployees(employeesFromLocalStorage)
      setActiveEmployees(employeesFromLocalStorage.filter(employee => employee.isActive === true))
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
    <EmployeeStatusContext.Provider value={{ employeeStatus, setEmployeeStatus }} >
      <div className="app">
        <EmployeesList employees={employees} />
        <EmployeeDetails employees={activeEmployees} />
      </div>
    </EmployeeStatusContext.Provider>
  );
}

export default App;
