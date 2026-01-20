export const getCustomers = () => {
    return fetch("http://localhost:3000/users?isStaff=false")
    .then((res) => res.json())
}

export const getCustomerById = (id) => {
    return fetch(`http://localhost:3000/customers?userId=${id}&_expand=user`)
    .then((res) => res.json())
}