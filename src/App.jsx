import { TicketList } from "./components/tickets/TicketList"
import "./css/App.css"
import { CustomerList } from "./components/customers/CustomerList"
import { EmployeeList } from "./components/employees/EmployeeList"
import { Routes, Route } from "react-router-dom"

export const App = () => {
  return (
    <Routes>
      <Route path="/tickets" element={<TicketList />} />
    </Routes>
  )
}
