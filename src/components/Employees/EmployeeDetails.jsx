import { useParams } from "react-router-dom"
import { getEmployeeById } from "../../services/employeeService"
import { useEffect, useState } from "react"

export const EmployeeDetails = () => {
    const { employeeId } = useParams()
    // console.log(employeeId)

    const [employee, setEmployee] = useState({})

    useEffect(() => {
        getEmployeeById(employeeId).then((data) => {
            const employeeObj = data[0]
            console.log(employeeObj)
            setEmployee(employeeObj)
        })
    }, [employeeId])
    
    return <section className="employee">
        <header className="employee-header">{employee.user?.fullName}</header>
        <div>
            <span className="employee-info">Email : </span>
            {employee.user?.email}
        </div>
        <div>
            <span className="employee-info">Specialty : </span>
            {employee.specialty}
        </div>
        <div>
            <span className="employee-info">Rate : </span>
            {employee.rate}
        </div>
        <footer className="employee-footer">
            <div>
                Currently working on {employee.employeeTickets?.length} tickets
            </div>
        </footer>
    </section>
}