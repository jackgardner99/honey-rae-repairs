export const getEmployees = () => {
    return fetch("http://localhost:3000/employees?_expand=user")
    .then((res) => res.json())
}