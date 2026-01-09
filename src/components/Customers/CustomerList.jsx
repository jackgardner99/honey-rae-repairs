import { useEffect, useState } from "react"
import { getCustomers } from "../../services/customerService"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getCustomers((customersArray) => {
            setCustomers(customersArray)
        })
    }, [])

    return (
        <div>
            <h2>Customers</h2>
            
        </div>
    )
}