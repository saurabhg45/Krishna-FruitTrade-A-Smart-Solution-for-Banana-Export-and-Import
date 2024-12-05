import React from "react";

const SupportTicketList = ({ tickets }) => (
  <div>
    <h3>Support Tickets</h3>
    {tickets.map((ticket) => (
      <p key={ticket.id}>
        Ticket ID: {ticket.id} - {ticket.status}
      </p>
    ))}
  </div>
);

export default SupportTicketList;
