import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Admin/admin.css";


export default function AdminHeader() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const Logout = () => {
    // Logout logic (e.g., clearing session storage or cookies)
    navigate("/login");
  };

  return (
    <div
      className={`admin-layout d-flex ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}
    >
      {/* Sidebar */}
      <aside className={`sidebar bg-dark text-white p-3 ${isSidebarOpen ? "d-block" : "d-none"}`}>
        <div className="sidebar-header mb-4">
          <h2>Fresh Horizons</h2>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/admin/dashboard" className="nav-link text-white">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/user-management" className="nav-link text-white">
              User Management
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/banana-management" className="nav-link text-white">
              Banana Management
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/order-management" className="nav-link text-white">
              Order Management
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/reports" className="nav-link text-white">
              Reports
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="content flex-grow-1">
        {/* Header */}
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <button className="btn btn-light me-3" onClick={toggleSidebar}>
              ☰
            </button>
            <Link to="/admin" className="navbar-brand">
              Fresh Horizons
            </Link>
            <div className="d-flex ms-auto">
              <Link to="/home" className="btn btn-outline-light me-2">
                Home
              </Link>
              <Link to="/about-us" className="btn btn-outline-light me-2">
                About Us
              </Link>
              <Link to="/services" className="btn btn-outline-light me-2">
                Services
              </Link>
              <Link to="/customer-feedback" className="btn btn-outline-light me-2">
                Customer Feedback
              </Link>
              <button className="btn btn-outline-light" onClick={Logout}>
                Logout
              </button>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="p-4">
          <h1>Admin Dashboard</h1>
          <p>Welcome to the Admin Panel!</p>
        </main>
      </div>
    </div>
  );
}

