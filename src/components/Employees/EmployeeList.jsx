import { useEffect, useState } from "react"
import { getEmployees } from "../../services/employeeService"
import { User } from "../customers/User"

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
                    return <User user={employeesObj.user} key={employeesObj.id} />
                })}
            </div>
        )
}