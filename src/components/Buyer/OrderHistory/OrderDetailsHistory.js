import React from "react";

const OrderDetailsHistory = ({ order }) => (
  <div>
    <h3>Past Order Details</h3>
    <p>Order ID: {order.id}</p>
    <p>Status: {order.status}</p>
  </div>
);

export default OrderDetailsHistory;
