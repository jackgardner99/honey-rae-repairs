import { useEffect, useState } from "react"
import { getCustomers } from "../../services/customerService"
import { User } from "./User"
import { Link } from "react-router-dom"

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
                return <Link to={`/customers/${customersObj.id}`}>                
                    <User user={customersObj} />
                </Link>
            })}
        </div>
    )
}