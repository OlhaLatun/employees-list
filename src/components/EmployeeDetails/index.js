import './EmployeeDetails.css'
import { useEffect, useState } from 'react'
import emptyList from '../../assets/note.png'

export default function EmlpoyeeDetails({employees}) {


    const [months, setMonths] = useState([])

    useEffect(() => {
        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
        ];
        
        let date = new Date()
        let end = monthNames.slice(0, date.getMonth() - 1)
        let start = monthNames.slice(date.getMonth())

        setMonths([...start, ...end])
    }, [])
  
    return(
        <div className='employees-details'>
            <h2 >Employees BirthDays </h2>
            <div className='month-cards'>
            { employees.length !== 0 ?
                months.map(month => 
                <div className='month-card' key={month}>
                    <h3>{month}</h3>
                    <UlItem filteredEmployees={employees
                        .filter(employee => employee.dob.month === month)
                        .sort((e1, e2) => e1.lastName > e2.lastName ? 1 : -1)
                    } />
                </div>) : 
                <p className='empty'>Employees list is empty
                    <img src={emptyList} alt='icon'/>
                </p>
            }
            </div>
        </div>
    )
}

function UlItem({filteredEmployees: employees}) {

return (
    <ul>
        {
            employees.length !== 0 ?
            employees.map(employee => 
            <li key={employee.id}> {`${employee.lastName} ${employee.firstName}
             - ${employee.dob.month} ${employee.dob.day}, 
             ${employee.dob.year} year`}</li>)
            : <p>No Employees</p>
        }
    </ul>
)
    
}