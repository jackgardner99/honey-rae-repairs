export const getAllTickets = () => {
    return fetch("http://localhost:3000/serviceTickets")
    .then((res) => res.json())
}