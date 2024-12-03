import React from "react";

const PaymentHistory = ({ transactions }) => (
  <div>
    <h3>Payment History</h3>
    {transactions.map((tx) => (
      <p key={tx.id}>
        Transaction ID: {tx.id} - ${tx.amount}
      </p>
    ))}
  </div>
);

export default PaymentHistory;
