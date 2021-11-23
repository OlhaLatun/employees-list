
import React, { useEffect } from 'react'
import './EmployeesList.css'
import { useState } from 'react'


export default function EmployeesList({employees, getEmployeeDetails}) {

    const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']  

    return (
        <div className='employees-list'>
              <h1> Say <span>HAPPY BIRTHDAY </span> to your employees </h1> 
            {
                alphabet.map(letter => {
                return <div className='letter-card' key={letter}>
                        <h2> {letter.toUpperCase()} </h2>
                        <UlItem filteredByLetter={employees
                                .filter(employee => employee.firstName[0] === letter.toUpperCase())
                                .sort((e1, e2) => e1.firstName > e2.firstName ? 1 : -1)}
                            getActiveEmployee={(details) => getEmployeeDetails(details)} 
                        />
                </div>
                })
            }
        </div>
    )
}

function UlItem({filteredByLetter: employees, getActiveEmployee}) {

    return (
        <ul>
            {employees.length !== 0 ? 
            employees.map(employee => 
                <LiItem 
                    employee={employee}
                    getActiveEmployee={(details) => getActiveEmployee(details)}
                />)
                : <p> No Employees </p>
                }
        </ul>
    ) 
}

function LiItem({employee, getActiveEmployee}) {

    const [isActive, setIsActive] = useState(false)
    
    useEffect(() => {
        setIsActive(employee.isActive)
    }, [isActive, employee.isActive])

    const handleChange = (e) => {
        getActiveEmployee({id: e.target.name, isActive})
    }

    return (
        <li key={employee.id} id={employee.id} className={isActive ? 'active' : 'not-active'}>
            {employee.firstName + ' ' + employee.lastName} 
            <form onChange={(e) => handleChange(e)}>
            <input type='radio' id='active' name={employee.id}
                onChange={() => setIsActive(prevState => !prevState)}
                checked={isActive}/>
            <label htmlFor='active'>Active</label>
            <br />
            <input type='radio' id='notActive' name={employee.id} 
                onChange={() => setIsActive(prevState => !prevState)}
                checked={!isActive}/>
            <label htmlFor='notActive'>Not Active</label>
            </form>
    </li>
    )
}