import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeNavBar } from "../components/nav/EmployeeNavBar"
import { Welcome } from "../components/welcome/Welcome"
import { TicketList } from "../components/tickets/TicketList"
import { CustomerList } from "../components/customers/CustomerList"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { EmployeeList } from "../components/employees/EmployeeList"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { EmployeeEdit } from "../components/form/EmployeeEdit"

export const EmployeeViews = ({ currentUser }) => {


    return <Routes>
    <Route path="/"
       element={<>
          <EmployeeNavBar />
          <Outlet />
        </>}>
          <Route index element={<Welcome />} />
          <Route path="tickets" element={<TicketList currentUser={currentUser}/>} />
          <Route path="customers">
            <Route index element={<CustomerList />} />
            <Route path=":customerId" element={<CustomerDetails />} />
          </Route>
          <Route path="employees">
            <Route index element={<EmployeeList />} />
            <Route path=":employeeId" element={<EmployeeDetails />} />  
          </Route>
          <Route path="profile" element={<EmployeeEdit currentUser={currentUser} />}/>    
      </Route>
  </Routes>
}