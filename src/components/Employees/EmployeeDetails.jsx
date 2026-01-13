import { useParams } from "react-router-dom"
import { getEmployeeById } from "../../services/employeeService"
import { useEffect, useState } from "react"

export const EmployeeDetails = () => {
    const { employeeId } = useParams()

    const [employee, setEmployee] = useState({})

    useEffect(() => {
        getEmployeeById(employeeId).then(setEmployee)
    }, [employee])

    // const employee = getEmployeeById(employeeId)
    // console.log(employee)
    
    return <div className="employee">
        <div className="employee-info">
            <div className="employee-header">{employee.user?.fullName}</div>
        </div>
        <div className="employee-info">
            <div>Email {employee.user?.email}</div>
            <div>Specialty {employee.specialty}</div>
            <div>Rate {employee.rate}</div>
        </div>
        <div className="employee-info">
            <div className="employee-footer">Currently working on {employee.employeeTickets} tickets</div>
        </div>
    </div>
}