import React, { useState } from "react";

const PaymentForm = ({ onPay }) => {
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    onPay(amount);
  };

  return (
    <div>
      <h3>Payment Form</h3>
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleSubmit}>Pay Now</button>
    </div>
  );
};

export default PaymentForm;
