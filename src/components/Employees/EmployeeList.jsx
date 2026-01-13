import { useEffect, useState } from "react"
import { getEmployees } from "../../services/employeeService"
import { User } from "../customers/User"
import { Link } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getEmployees().then((employeeArray) => {
            setEmployees(employeeArray)
        })
    }, [])

    return (
            <div className="employees">
                {employees.map((employeesObj) => {
                    return <Link to={`/employees/${employeesObj.id}`} key={employeesObj.id}>
                        <User user={employeesObj.user} key={employeesObj.id} />
                    </Link>
                    })}
            </div>
        )
}