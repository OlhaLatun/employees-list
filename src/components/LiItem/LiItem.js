import React, { useEffect, useState, useContext } from 'react'
import LiContainer from '../../Containers/LiContainer'
import EmployeeStatusContext from '../../services/context'
export default function LiItem({ employee }) {

    const { setEmployeeStatus } = useContext(EmployeeStatusContext)

    const handleChange = (e) => {
        const isActive = e.target.id === 'active'
        setEmployeeStatus({ id: e.target.name, isActive })
    }
    return <LiContainer
        employee={employee}
        onFormChange={handleChange}
    />
}