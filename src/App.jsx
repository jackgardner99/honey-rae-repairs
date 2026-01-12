import { TicketList } from "./components/Tickets/TicketList"
import "./css/App.css"
import { CustomerList } from "./components/Customers/CustomerList"
import { EmployeeList } from "./components/Employees/EmployeeList"

export const App = () => {
  return (
    <>
      {/* <TicketList /> */}
      {/* <CustomerList /> */}
      <EmployeeList />
    </>
  )
}
