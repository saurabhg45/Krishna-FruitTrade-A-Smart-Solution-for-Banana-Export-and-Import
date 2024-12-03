import React from "react";
import { Link } from "react-router-dom";
import "../Buyer/buyer.css"

export default function Sidebar() {
  return (
    <aside className="sidebar bg-light">
      <ul className="sidebar-menu">
        <li>
          <Link to="/buyer-dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/product-catalog">Product Catalog</Link>
        </li>
        <li>
          <Link to="/order-tracking">Order Tracking</Link>
        </li>
        <li>
          <Link to="/order-history">Order History</Link>
        </li>
        <li>
          <Link to="/payment-management">Payments</Link>
        </li>
        <li>
          <Link to="/support-tickets">Support</Link>
        </li>
      </ul>
    </aside>
  );
}
