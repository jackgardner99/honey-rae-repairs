export const getEmployees = () => {
    return fetch("http://localhost:3000/employees?_expand=user")
    .then((res) => res.json())
}

export const getEmployeeById = (userId) => {
    return fetch(`http://localhost:3000/employees?userId=${userId}&_expand=user&_embed=employeeTickets`)
    .then((res) => res.json())
}