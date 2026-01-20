import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome"
import { CustomerNavBar } from "../components/nav/CustomerNavBar"
import { TicketList } from "../components/tickets/TicketList"
import { TicketForm } from "../components/form/TicketForm"

export const CustomerViews = ({ currentUser }) => {
    return <Routes>
        <Route path="/" 
        element={<>
            <CustomerNavBar />
            <Outlet />
        </>}>
            <Route index element={<Welcome />} />
            <Route path="tickets">
                <Route index element={<TicketList currentUser={currentUser} {...console.log("tickets")}/>} />
                <Route path="create" element={<TicketForm currentUser={currentUser} {...console.log("create")}/>} />
            </Route>
        </Route>
    </Routes>
}