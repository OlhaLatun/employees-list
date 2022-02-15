import { React, useState } from 'react'

export default function LiContainer({ employee: { id, firstName, lastName }, onFormChange }) {
    return (
        <li key={id} id={id} >
            {firstName + ' ' + lastName}
            <form onChange={(e) => onFormChange(e)}>
                <Input id={id} status={false} />
            </form>
        </li>
    )
}

function Input({ id, status }) {

    const [checked, setChecked] = useState(status)

    function handleChange(e) {
        e.checked ? setChecked(!e.checked) : setChecked(e.checked)
    }
    return (
        <>
            <input
                type='radio' id={checked ? 'active' : 'notActive'} name={id}
                onChange={handleChange}
                checked={checked}
            />
            <label htmlFor={checked ? 'active' : 'notActive'}>{checked ? 'Active' : 'Not Active'}</label>
        </>
    )
}