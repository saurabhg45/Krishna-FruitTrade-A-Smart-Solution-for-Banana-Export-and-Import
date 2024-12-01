import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-light vh-100 p-3" style={{ width: "250px" }}>
      <h5 className="text-primary">Quick Access</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/orders">
            Orders
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/payments">
            Payments
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/insights">
            Insights
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
