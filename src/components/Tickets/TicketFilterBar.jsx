export const TicketFilterBar = ({ setShowEmergencyOnly, setSearchTerm, currentUser, setShowOpenTickets }) => {
    return (
        <div className="filter-bar">
                {currentUser.isStaff ? <>
                    <button
                className="filter-btn btn-primary"
                onClick={() => {
                    setShowEmergencyOnly(true)
                }}
                >
                    Emergency
                </button>
                <button
                className="filter-btn btn-info"
                onClick={() => {
                    setShowEmergencyOnly(false)
                }}
                >
                    Show All
                </button>
                <input type="text" placeholder="Search Tickets" className="ticket-search"  onChange={(event) => {
                    setSearchTerm(event.target.value)
                }}/>
                </> : <>
                    <button className="filter-btn btn-primary">Create Ticket</button>
                    <button className="filter-btn btn-info" onClick={() => {
                        setShowOpenTickets(true)
                    }}>Open Tickets</button>
                    <button className="filter-btn btn-secondary" onClick={() => {
                        setShowOpenTickets(false)
                    }}>All Tickets</button>
                </>}
            </div>
    )
}