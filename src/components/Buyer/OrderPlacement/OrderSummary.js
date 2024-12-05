import React from "react";

const OrderSummary = ({ cart }) => (
  <div>
    <h3>Order Summary</h3>
    {cart.map((item) => (
      <p key={item.id}>
        {item.name} - {item.quantity}
      </p>
    ))}
  </div>
);

export default OrderSummary;
