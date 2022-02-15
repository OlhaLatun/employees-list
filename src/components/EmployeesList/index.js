
import React from 'react'
import './EmployeesList.css'

import { filterEmployeesByLetter } from '../../Helpers/helpers'
import EmployeeListULContainer from '../../Containers/EmployeeListULContainer'

const APLHABET = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

export default function EmployeesList({ employees }) {
    return (
        <div className='employees-list'>
            <h1> Say <span>HAPPY BIRTHDAY </span> to your employees </h1>
            {
                APLHABET.map(letter => {
                    return <div className='letter-card' key={letter}>
                        <h2> {letter.toUpperCase()} </h2>
                        <EmployeeListULContainer
                            filteredByLetter={filterEmployeesByLetter(employees, letter)}
                        />
                    </div>
                })
            }
        </div>
    )
}