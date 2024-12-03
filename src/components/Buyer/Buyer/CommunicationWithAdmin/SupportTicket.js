import React, { useState } from "react";

const SupportTicket = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    onSubmit(message);
  };

  return (
    <div>
      <h3>Submit a Support Ticket</h3>
      <textarea
        placeholder="Enter your issue"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SupportTicket;
