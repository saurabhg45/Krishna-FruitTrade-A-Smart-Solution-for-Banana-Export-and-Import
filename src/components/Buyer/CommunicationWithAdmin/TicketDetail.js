import React from "react";

const TicketDetail = ({ ticket }) => (
  <div>
    <h3>Ticket Details</h3>
    <p>Ticket ID: {ticket.id}</p>
    <p>Status: {ticket.status}</p>
    <p>Message: {ticket.message}</p>
  </div>
);

export default TicketDetail;
