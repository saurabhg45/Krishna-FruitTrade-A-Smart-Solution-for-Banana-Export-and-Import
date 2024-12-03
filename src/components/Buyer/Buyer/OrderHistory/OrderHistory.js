import React from "react";

const OrderHistory = ({ orders }) => (
  <div>
    <h3>Order History</h3>
    {orders.map((order) => (
      <div key={order.id}>
        <p>Order ID: {order.id}</p>
        <p>Date: {order.date}</p>
      </div>
    ))}
  </div>
);

export default OrderHistory;
