export const getEmployees = () => {
    return fetch("http://localhost:3000/employees?_expand=user")
    .then((res) => res.json())
}

export const getEmployeeById = (id) => {
    return fetch(`http://localhost:3000/employees?id=${id}&_expand=user&_embed=employeeTickets`)
    .then((res) => res.json())
}

export const getEmployeeByUserId = (userId) => {
    return fetch(`http://localhost:3000/employees?userId=${userId}`).then(res => res.json())
}

export const updateEmployee = (employee) => {
    return fetch(`http://localhost:3000/employees/${employee.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })
}