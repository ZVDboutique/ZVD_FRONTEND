import React, { useState } from "react";
import "./Login.css";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SignupForm from "./SignUpForm";

const LoginForm = () => {
  const navigate = useNavigate();
  const [activeForm, setActiveForm] = useState("login");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
  
  // Handle login with API
  const handleLogin = async () => { 
    try {
      const response = await axios.post("http://52.91.88.95:5062/api/auth/login", {
        email, // Using email as per API
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token); // Store token for requests
        alert("Login successful!");
        navigate("/home"); // Redirect to home after login
      }
    } catch (error) {
      alert("Invalid username or password!");
    }
  };
  // Handle forgot password with API
  const handleForgotPassword = async () => {
    if (!email) {
      alert("Please enter your email before proceeding.");
      return;
    }

    try {
      setIsForgotPasswordOpen(true);
      const response = await axios.post("http://52.91.88.95:5000/api/SignupRequest/forgot-password", {
        email,
      });

      if (response.status === 200) {
        alert("Password reset link sent to your email.");
      }
    } catch (error) {
      alert("Error while sending reset link. Please try again.");
    }
  };

  return (
    <>
      {activeForm === "login" ? (
        <div className="main-login-contain">
          <div className="login-container">
            <img src={logo} alt="Logo" className="logo" />

            <div className="input-group">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Enter Your Username" // Updated placeholder to match field
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={
                  passwordVisible
                    ? "fas fa-eye-slash toggle-password-slash"
                    : "fas fa-eye toggle-password"
                }
                onClick={togglePasswordVisibility}
              ></i>
            </div>

            <div className="options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="/forgot-password" onClick={handleForgotPassword}>
                Forgot Password?
              </a>
            </div>

            <button className="login-btn" onClick={handleLogin}>
              Sign In
            </button>

            <p className="signup-text">
              Don't have an account?{" "}
              <a href="/signup" onClick={() => setActiveForm("signup")}>
                Sign Up
              </a>
            </p>
          </div>
        </div>
      ) : (
        <SignupForm />
      )}
      {isForgotPasswordOpen && (
        <div className="forgot-overlay">
          <div id="forgot-password-dialog" className="forgot-dialog">
            <h2>Forgot Password</h2>

            <label className="forgot-label">Enter your email to reset your password:</label>
            <input
              type="email"
              className="forgot-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="forgot-buttons">
              <button className="forgot-submit-btn" onClick={() => setIsForgotPasswordOpen(false)}>Submit</button>
              <button className="forgot-close-btn" onClick={() => setIsForgotPasswordOpen(false)}>✖</button>
            </div>
          </div>
        </div>

      )}
    </>
  );
};

export default LoginForm;
