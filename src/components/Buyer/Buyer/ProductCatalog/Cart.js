import React from "react";

const Cart = ({ cartItems, onCheckout }) => (
  <div>
    <h3>Your Cart</h3>
    <ul>
      {cartItems.map((item, index) => (
        <li key={index}>
          {item.name} - {item.quantity}
        </li>
      ))}
    </ul>
    <button onClick={onCheckout}>Checkout</button>
  </div>
);

export default Cart;
