import React from 'react'
import LiItem from '../Components/LiItem/LiItem'

export default function EmployeeListULContainer({ filteredByLetter: employees }) {
    return (
        <ul>
            {employees.length !== 0 ?
                employees.map(employee =>
                    <LiItem
                        employee={employee}
                    />)
                : <p> No Employees </p>
            }
        </ul>
    )
}