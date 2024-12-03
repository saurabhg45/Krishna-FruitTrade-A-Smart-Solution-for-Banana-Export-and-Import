import React from "react";

const OrderDetails = ({ order }) => (
  <div>
    <h3>Order Details</h3>
    <p>Order ID: {order.id}</p>
    <p>Status: {order.status}</p>
    <p>Total: ${order.total}</p>
  </div>
);

export default OrderDetails;
