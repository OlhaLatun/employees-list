const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

export const filterEmployeesByLetter = (employees, letter) => {
    return employees
        .filter(employee => employee.firstName[0] === letter.toUpperCase())
        .sort((e1, e2) => e1.firstName > e2.firstName ? 1 : -1)
}

export const filterEmployeesByMonth = (employees, month) => {
    return employees
        .filter(employee => employee.dob.month === month)
        .sort((e1, e2) => e1.lastName > e2.lastName ? 1 : -1)
}

export const SortedMonths = () => {
    let date = new Date()
    let end = MONTHS.slice(0, date.getMonth() - 1)
    let start = MONTHS.slice(date.getMonth())
    return [...start, ...end]
}

export const getDateOfBirth = (employee) => {
    const date = new Date(employee.dob)

    const month = MONTHS[date.getMonth()]
    const day = date.getDate()
    const year = date.getFullYear()

    return { day, month, year }
}

export const handleActiveEmployees = (activeEmployee, setActiveEmployees) => {

}
