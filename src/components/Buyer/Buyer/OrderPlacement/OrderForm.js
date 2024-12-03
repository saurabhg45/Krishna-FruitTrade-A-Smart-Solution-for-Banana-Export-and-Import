import React, { useState } from "react";

const OrderForm = ({ onSubmitOrder }) => {
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    onSubmitOrder({ address });
  };

  return (
    <div>
      <h2>Order Form</h2>
      <input
        type="text"
        placeholder="Enter Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
};

export default OrderForm;
