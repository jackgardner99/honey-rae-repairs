import { useEffect, useState } from "react"
import { getCustomers } from "../../services/customerService"
import { User } from "./User"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getCustomers().then((customerArray) => {
            setCustomers(customerArray)
        })
    }, [])

    return (
        <div className="customers">
            {customers.map((customersObj) => {
                return <User user={customersObj} />
            })}
        </div>
    )
}