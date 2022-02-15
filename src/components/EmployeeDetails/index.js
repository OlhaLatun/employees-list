import './EmployeeDetails.css'
import { useEffect, useState } from 'react'
import emptyList from '../../assets/note.png'
import { SortedMonths } from '../../Helpers/helpers'
import EmlpoyeeDetailsULContainer from '../../Containers/EmployeeDetailsULContainer'
import { filterEmployeesByMonth } from '../../Helpers/helpers'

export default function EmlpoyeeDetails({ employees }) {
    const [months, setMonths] = useState([])

    useEffect(() => {
        console.log(employees)
        setMonths(SortedMonths)
    }, [])

    return (
        <div className='employees-details'>
            <h2 >Employees BirthDays </h2>
            <div className='month-cards'>
                {employees.length !== 0 ?
                    months.map(month =>
                        <div className='month-card' key={month}>
                            <h3>{month}</h3>
                            <EmlpoyeeDetailsULContainer
                                filteredEmployees={filterEmployeesByMonth(employees, month)}
                            />
                        </div>) :
                    <p className='empty'>Employees list is empty
                        <img src={emptyList} alt='icon' />
                    </p>
                }
            </div>
        </div>
    )
}

