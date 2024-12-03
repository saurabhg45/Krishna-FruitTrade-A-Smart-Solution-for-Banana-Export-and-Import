import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="col-md-3 bg-light sidebar p-3">
      <h4>Dashboard</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/catalog">
            Product Catalog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/orders">
            Order Tracking
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/order-history">
            Order History
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/payments">
            Payment Management
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/support">
            Support
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
