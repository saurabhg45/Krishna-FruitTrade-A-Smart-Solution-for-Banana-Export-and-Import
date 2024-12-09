import React, { useState } from "react";
import { Link } from "react-router-dom";  // For navigation
import "../Admin/admin.css"; // Import your custom sidebar CSS

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const handleClick = (tab) => {
    setActiveTab(tab);  // Update active tab
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link
            to="/admin/dashboard"
            onClick={() => handleClick("Dashboard")}
            className={activeTab === "Dashboard" ? "active" : ""}
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/admin/user-management"
            onClick={() => handleClick("UserManagement")}
            className={activeTab === "UserManagement" ? "active" : ""}
          >
            User Management
          </Link>
        </li>
        <li>
          <Link
            to="/admin/banana-management"
            onClick={() => handleClick("BananaManagement")}
            className={activeTab === "BananaManagement" ? "active" : ""}
          >
            Banana Management
          </Link>
        </li>
        <li>
          <Link
            to="/admin/order-management"
            onClick={() => handleClick("OrderManagement")}
            className={activeTab === "OrderManagement" ? "active" : ""}
          >
            Order Management
          </Link>
        </li>
        <li>
          <Link
            to="/admin/logistics"
            onClick={() => handleClick("Logistics")}
            className={activeTab === "Logistics" ? "active" : ""}
          >
            Logistics
          </Link>
        </li>
        <li>
          <Link
            to="/admin/reports-analytics"
            onClick={() => handleClick("ReportsAnalytics")}
            className={activeTab === "ReportsAnalytics" ? "active" : ""}
          >
            Reports & Analytics
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
