import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Buyer/buyer.css"

const Header = () => {
  const navigate = useNavigate();

  const Logout = () => {
    navigate("/login");
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Fresh Horizon
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/buyer-dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product-catalog">
                  Product Catalog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order-tracking">
                  Order Tracking
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/order-history">
                  Order History
                </Link>
              </li>              
              <li className="nav-item">
                <Link className="nav-link" to="/payment-management">
                  Payment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/communication-with-admin">
                  Communication With Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support-tickets">
                  Support
                </Link>
              </li>
              {/* Logout Button */}
              <div className="d-flex">
                <button className="btn btn-outline-light" onClick={Logout}>
                  Logout
                </button>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

// <header>
//   <nav>
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/product-catalog">Catalog</Link>
//       </li>
//       <li>
//         <Link to="/order-tracking">Track Order</Link>
//       </li>
//       <li>
//         <Link to="/order-history">Order History</Link>
//       </li>
//       <li>
//         <Link to="/payment-management">Payments</Link>
//       </li>
//       <li>
//         <Link to="/support">Support</Link>
//       </li>
//     </ul>
//   </nav>
// </header>

export default Header;
