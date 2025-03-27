import React, { useState } from "react";
import "./Login.css";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import check from '../images/Frame.png';

const SignupForm = () => {
  const [step, setStep] = useState("signup"); // 'signup' | 'kyc' | 'company'
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (step === "signup") setStep("kyc");
    else if (step === "kyc") setIsOtpOpen(true); // Open OTP dialog in KYC
    else if (step === "company") console.log("Final Step Reached");
  };

  const handleOtpSubmit = () => {
    setIsOtpOpen(false); // Close OTP dialog
    setStep("company"); // Move to company section
  };

  const handleBack = () => {
    if (step === "kyc") setStep("signup");
    else if (step === "company") setStep("kyc");
  };

  return (
    <div className="signInform-container">
      <img src={logo} alt="Logo" className="logo" />

      {step === "signup" && (
        <div>
          <h3 style={{marginBottom:'12px'}}>User Details</h3>
          <div className="signInrow">
            <div className="signIninput-group">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="signIninput-group">
              <input type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-group">
              <input type="email" placeholder="Primary Email" />
            </div>
            <div className="signIninput-group">
              <input type="email" placeholder="Secondary Email" />
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-group">
              <input type="text" placeholder="Primary Contact" />
            </div>
            <div className="signIninput-group">
              <input type="text" placeholder="Secondary Contact" />
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
              <input type="text" placeholder="Whatsapp Number" />
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
            <input type="password" placeholder="Password" />
            <span className="signIntoggle-password"><i className="fa-solid fa-eye"></i></span>
                        </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
            <input type="password" placeholder="Confirm Password" />
            <span className="signIntoggle-password"><i className="fa-solid fa-eye"></i></span>
                        </div>
          </div>
          <div className="signInbuttonDiv">
          <button className="signInbtn " style={{visibility:"hidden"}} onClick={handleBack}>
              <i className="fa-solid fa-arrow-left"></i> Back
            </button>
            <button className="signInbtn primary" onClick={handleNext}>
              Next <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      )}

      {step === "kyc" && (
        <div>
          <h3 style={{marginBottom:'12px'}}>KYC & Verification Details</h3>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
              <input type="text" placeholder="Pan Number" />
            </div>
          </div>
          <div className="signInrow">
  <div className="signIninput-singlegroup">
  <div class="custom-dropdown">
  <select>
    <option value="" disabled selected>Select Document</option>
    <option value="aadhar">Aadhar Card</option>
    <option value="passport">Passport</option>
    <option value="driving-license">Driving License</option>
    <option value="pan-card">PAN Card</option>
    <option value="voter-id">Voter ID</option>
  </select>
</div>

  </div>
</div>
<div class="kyc-success">
  <img src={check}/>
  KYC is done Successfully
</div>


          <div className="signInbuttonDiv">
            <button className="signInbtn" onClick={handleBack}>
              <i className="fa-solid fa-arrow-left"></i> Back
            </button>
            <button className="signInbtn primary" onClick={handleNext}>
              Next <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          {/* OTP Dialog - Appears Inside KYC Section */}
          {isOtpOpen && (
            <div className="overlay">
              <div className="dialog-box">
                <h2>Verify Aadhar OTP</h2>
                <div className="info-box">
                  Aadhar card has sent a temporary OTP to your mobile ending in
                  ******9293 (valid for 10 mins)
                </div>
                <label>Please enter OTP to complete verification</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="otp-input"
                />
                <button className="submit-btn" onClick={handleOtpSubmit}>
                  Submit
                </button>
                <p className="resend-text">
                  Didn’t get the OTP? <span className="resend-link">Resend OTP</span>
                </p>
                <button className="close-btn" onClick={() => setIsOtpOpen(false)}>
                  ✖
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {step === "company" && (
        <div>
          <h3 className="CompanyHeader">Company Information</h3>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
            <input type="password" placeholder="Part of Company " />
            <span className="signIntoggle-password"><i className="fa-regular fa-square-check"></i></span>
                        </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
              <input type="text" placeholder="Diamond  Hub" />
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
              <input type="text" placeholder="Company Address" />
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-group">
              <input type="text" placeholder="Company Email" />
            </div>
            <div className="signIninput-group">
              <input type="text" placeholder="Company Contact" />
            </div>
          </div>
          <p className="CompanypersonDetails">Company Contact Person Details</p>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
              <input type="text" placeholder="Company Name" />
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-group">
              <input type="text" placeholder="Contact Person Email" />
            </div>
            <div className="signIninput-group">
              <input type="text" placeholder="Contact Person Phone" />
            </div>
          </div>
          <div className="signInrow notificationCheckbox">
            <p>Would you like to receive updates and notifications?</p>
            <p><input type="checkbox" checked={true} /></p>
</div>
          <div className="signInbuttonDiv CompanyFooter">
            <button className="signInbtn" onClick={handleBack}>
              <i className="fa-solid fa-arrow-left"></i> Back
            </button>
            <button className="signInbtn primary" onClick={()=>{navigate("/home")}}>
              Next <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupForm;
