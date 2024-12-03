import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState(""); // Pre-filled email
  const [password, setPassword] = useState(""); // Pre-filled password
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("Login Option");
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown visibility
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (selectedOption === "Admin" && email === "admin@gmail.com" && password === "admin") {
      navigate("/admin");
    } else if (selectedOption === "Buyer" && email === "buyer@gmail.com" && password === "buyer") {
      navigate("/buyer");
    } else if (selectedOption === "Farmer" && email === "farmer@gmail.com" && password === "farmer") {
      navigate("/farmer");
    } else {
      setErrorMessage("Invalid email, password, or login option.");
    }
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="login-page">
      <h2 className="login-title">Login to Your Account</h2>
      <div className="login-container">
        <form onSubmit={handleLogin} className="form-container">
          <div className="dropdown">
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown visibility
            >
              {selectedOption}
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => handleSelect("Admin")}
                  >
                    Admin
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => handleSelect("Farmer")}
                  >
                    Farmer
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => handleSelect("Buyer")}
                  >
                    Buyer
                  </button>
                </li>
              </ul>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          <div className="signup-link">
            <p>
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
