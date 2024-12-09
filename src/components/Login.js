import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("Who are you?");
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const [termsAccepted, setTermsAccepted] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!termsAccepted) {
      setErrorMessage("You must accept the terms and conditions.");
      return;
    }

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

  const selectRole = (role) => {
    setSelectedOption(role);
    setDropdownOpen(false);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="form-container">
          <div className="dropdown">
            <button
              className="dropdown-button"
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selectedOption}
            </button>
            {dropdownOpen && (
              <div className="dropdown-options">
                <div onClick={() => selectRole("Admin")}>Admin</div>
                <div onClick={() => selectRole("Farmer")}>Farmer</div>
                <div onClick={() => selectRole("Buyer")}>Buyer</div>
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}
