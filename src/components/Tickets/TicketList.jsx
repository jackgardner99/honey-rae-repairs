import { useEffect, useState } from "react"
import { getAllTickets } from "../../services/ticketService"
import { Ticket } from "./Ticket"
import { TicketFilterBar } from "./TicketFilterBar"

export const TicketList = ({ currentUser }) => {
    const [allTickets, setAllTickets] = useState([])
    const [showEmergencyOnly, setShowEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [showOpenTickets, setShowOpenTickets] = useState(false)

    const getAndSetTickets = () => {
        console.log("initial")
        getAllTickets().then((ticketsArray) => {
            if (currentUser.isStaff) {
                setAllTickets(ticketsArray)

            } else {
                const customerTickets = ticketsArray.filter(ticket => ticket.userId === currentUser.id)
                setAllTickets(customerTickets)
            }
        })
    }
 
    useEffect(() => {
        getAndSetTickets()
    }, [currentUser])

    useEffect(() => {
        if (showEmergencyOnly) {
            const emergencyTickets = allTickets.filter(
                (ticket) => ticket.emergency === true
            )
            setFilteredTickets(emergencyTickets)
        } else {
            console.log("allTickets")
            setFilteredTickets(allTickets)
        }
    }, [showEmergencyOnly, allTickets])

    useEffect(() => {
            const foundTickets = allTickets.filter((ticket) => ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))
            setFilteredTickets(foundTickets)

    }, [searchTerm, allTickets])

    useEffect(() => {
        if (showOpenTickets) {
            const openTickets = allTickets.filter((ticket) => ticket.dateCompleted === "")
            setFilteredTickets(openTickets)
        } else {
            setFilteredTickets(allTickets)
        }
    }, [showOpenTickets, allTickets])

    return (
        <div className="tickets-container">
            <h2>Tickets</h2>
            <TicketFilterBar setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm} currentUser={currentUser} setShowOpenTickets={setShowOpenTickets} />
            <article className="tickets">
                {filteredTickets.map((ticket) => {
                    return (<Ticket ticket={ticket} key={ticket.id} currentUser={currentUser} getAndSetTickets={getAndSetTickets} />)
                })}
            </article>
        </div>
    )
}