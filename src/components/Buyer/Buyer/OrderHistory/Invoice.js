import React from "react";

const Invoice = ({ invoice }) => (
  <div>
    <h3>Invoice</h3>
    <p>Invoice Number: {invoice.number}</p>
    <p>Total: ${invoice.total}</p>
  </div>
);

export default Invoice;
