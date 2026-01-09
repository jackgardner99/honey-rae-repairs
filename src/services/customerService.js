export const getCustomers = () => {
    return fetch("http://localhost:3000/users?isStaff=false")
    .then((res) => res.json())
}