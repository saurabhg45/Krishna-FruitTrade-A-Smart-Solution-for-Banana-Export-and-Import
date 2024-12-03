import React from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css"

export default function Register() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <h1 className="title">Welcome to Fresh Horizons</h1>
        <p className="subtitle">Connecting Farmers and Buyers Across the Globe</p>
        <div className="action-buttons">
          <button onClick={handleLogin} className="btn login-btn">
            Login
          </button>
          <button onClick={handleSignup} className="btn signup-btn">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
