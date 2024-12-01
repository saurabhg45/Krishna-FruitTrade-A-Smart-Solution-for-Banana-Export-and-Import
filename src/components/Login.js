import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Style.css";

export default function Login() {
  const [email, setEmail] = useState(""); // Pre-filled email
  const [password, setPassword] = useState(""); // Pre-filled password
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com" && password === "admin") {
      navigate("/admin");
    } else {
      setErrorMessage("Invalid email or password.");
    }
  };

  return (
    <div className="login-page">
      <h2>Login to Your Account</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
     
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
        <div className="signup-link">
          <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
      </form>
    </div>
  );
}
