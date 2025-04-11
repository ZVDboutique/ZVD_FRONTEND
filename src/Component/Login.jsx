import React, { useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm";
import SignupForm from "./SignUpForm";
export const Login = () => {
  const [activeForm, setActiveForm] = useState("login");

  return (
    <div id="LoginSignInContainer" className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul>
        <li  className={activeForm === "login" ? "active" : ""} onClick={() => setActiveForm("login")}>
  <a href="/login">LOG IN</a>
  <div className="fff"></div>
</li>
<li  className={activeForm === "signup" ? "active" : ""} onClick={() => setActiveForm("signup")}>
  <a href="/signup">SIGN UP</a>
  <div className="fff"></div>
</li>

        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {activeForm === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </div>
  );
};