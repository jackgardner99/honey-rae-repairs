import { TicketList } from "./components/tickets/TicketList"
import "./css/App.css"
import { CustomerList } from "./components/customers/CustomerList"
import { EmployeeList } from "./components/employees/EmployeeList"
import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar"
import { Outlet } from "react-router-dom"

export const App = () => {
  return (
    <Routes>
      <Route path="/"
       element={<>
          <NavBar />
          <Outlet />
        </>}>
          <Route path="tickets" element={<TicketList />} />
          <Route path="customers" element={<CustomerList />} />
          <Route path="employees" element={<EmployeeList />} />      
      </Route>
    </Routes>
  )
}
