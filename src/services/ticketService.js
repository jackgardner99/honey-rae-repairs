export const getAllTickets = () => {
    return fetch("http://localhost:3000/serviceTickets?_embed=employeeTickets")
    .then((res) => res.json())
}