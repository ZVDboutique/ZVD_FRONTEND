import React, { useState } from "react";
import './Login.css';
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import SignupForm from "./SignUpForm";

const LoginForm = () => {
    const navigate = useNavigate();
      const [activeForm, setActiveForm] = useState("login");
    

  return (
    <>
            {activeForm === "login" ?     <div className="main-login-contain">
 <div class="login-container">
    <img src={logo} alt="Logo" class="logo" />

    <div class="input-group">
        <i class="fas fa-user"></i>
        <input type="text" placeholder="Enter Your Username" />
    </div>

    <div class="input-group">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Enter Your Password" />
        <i class="fas fa-eye toggle-password"></i>
    </div>

    <div class="options">
        <label>
            <input type="checkbox" /> Remember me
        </label>
        <a href="#">Forgot Password</a>
    </div>

    <button class="login-btn" onClick={()=>{navigate("/home")}}>Sign In</button>

    <p class="signup-text" >Don't have an account? <a href="#" onClick={() => setActiveForm("signup")}>Sign Up</a></p>
</div>
    </div> : <SignupForm />}

    </>

   
  );
};

export default LoginForm;
