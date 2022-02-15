export default function EmlpoyeeDetailsULContainer({ filteredEmployees: employees }) {
    return (
        <ul>
            {
                employees.length !== 0 ?
                    employees.map(({ id, lastName, firstName, dob: { day, month, year } }) =>
                        <li key={id}> {`${lastName} ${firstName}
             - ${month} ${day}, 
             ${year} year`}</li>)
                    : <p>No Employees</p>
            }
        </ul>
    )

}