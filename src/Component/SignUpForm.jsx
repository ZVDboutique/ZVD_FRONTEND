import React, { useState } from "react";
import "./Login.css";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import check from '../images/Frame.png';
import axios from "axios";

const SignupForm = () => {
  const [step, setStep] = useState("signup"); // 'signup' | 'kyc' | 'company'
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);


  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const toggleConfPasswordVisibility = () => {
    setConfirmPasswordVisible((prev) => !prev);
  };
  // State to store form data
  const [formData, setFormData] = useState({
    // User Details
    firstName: "",
    lastName: "",
    customer_type_id: "",
    primaryEmail: "",
    secondaryEmail: "",
    primaryContact: "",
    secondaryContact: "",
    whatsappNumber: "",
    password: "",
    confirmPassword: "",
    isKycDone: false,
    isPartOfCompany: false,
    isNotify: true, // Default checked for notifications

    // KYC Details
    panCardNumber: "",
    doc_type_name: "",
    otp: "",

    // Company Details
    companyName: "",
    diamondHub: "",
    companyAddress: "",
    companyEmail: "",
    companyContact: "",
    contactPersonEmail: "",
    contactPersonPhone: "",
  });
  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleNext = () => {
    if (step === "signup") {
      setStep("kyc");
    } else if (step === "kyc") {
      if (!formData.doc_type_name) {
        alert("Please select a document before proceeding.");
      } else {
        alert("");
        setIsOtpOpen(true);
      }
    } else if (step === "company") {
      console.log("Final Step Reached");
    }
  };

  const handleOtpSubmit = () => {
    setIsOtpOpen(false);
    setStep("company");
  };

  const handleBack = () => {
    if (step === "kyc") setStep("signup");
    else if (step === "company") setStep("kyc");
  };
  // Submit form data to backend
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await axios.post("http://52.91.88.95:5062/api/SignupRequest/signup",
        formData
      );
      console.log("Signup successful:", response.data);
      navigate("/home"); // Redirect on success
    } catch (error) {
      console.error("Error during signup:", error.response?.data || error.message);
    }
    finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="signInform-container">
      <img src={logo} alt="Logo" className="logo" />

      {step === "signup" && (
        <div>
          <h3 style={{ marginBottom: '12px' }}>User Details</h3>
          <div className="signInrow">
            <div className="signIninput-group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            <div className="signIninput-group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-group">
              <input
                type="email"
                name="primaryEmail"
                value={formData.primaryEmail}
                onChange={handleChange}
                placeholder="Primary Email"
              />
            </div>
            <div className="signIninput-group">
              <input type="email"
                name="secondaryEmail"
                value={formData.secondaryEmail}
                onChange={handleChange}
                 placeholder="Secondary Email" />
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-group">
              <input
                type="text"
                name="primaryContact"
                value={formData.primaryContact}
                onChange={handleChange}
                placeholder="Primary Contact"
              />
            </div>
            <div className="signIninput-group">
              <input type="text"
              name="secondaryContact"
              value={formData.secondaryContact}
              onChange={handleChange}
               placeholder="Secondary Contact" />
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
              <div className="custom-dropdown">
                <select
                name="customer_type_id"
                value={formData.customer_type_id}
                onChange={handleChange}>
                  <option value="" disabled>Select Customer Type</option>
                  <option value="individual">Individual</option>
                  <option value="business">Business</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
              <input type="text"
              name="whatsappNumber"
              value={formData.whatsappNumber}
              onChange={handleChange}
              placeholder="Whatsapp Number" />
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
              <input type={passwordVisible ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
              <span className="signIntoggle-password"><i class={passwordVisible ? "fas fa-eye-slash toggle-password-slash" : "fas fa-eye toggle-password"} onClick={togglePasswordVisibility} ></i>
              </span>
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
            <input
                  type={confirmPasswordVisible ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
            />

              <span className="signIntoggle-password"><i class={confirmPasswordVisible ? "fas fa-eye-slash toggle-password-slash" : "fas fa-eye toggle-password"} onClick={toggleConfPasswordVisibility} ></i>
              </span>
            </div>
          </div>
          <div className="signInbuttonDiv">
            <button className="signInbtn " style={{ visibility: "hidden" }} onClick={handleBack}>
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
          <h3 style={{ marginBottom: '1rem' }}>KYC & Verification Details</h3>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
              <div className="custom-dropdown">
                <select
                  name="doc_type_name"
                  value={formData.doc_type_name}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Document
                  </option>
                  <option value="aadhar">Aadhar Card</option>
                  <option value="passport">Passport</option>
                  <option value="driving-license">Driving License</option>
                  <option value="pan-card">PAN Card</option>
                  <option value="voter-id">Voter ID</option>
                </select>
              </div>
              <div className="signInrow">
                <input
                  type="text"
                  name="panCardNumber"
                  value={formData.panCardNumber}
                  onChange={handleChange}
                  placeholder="Docunment Number"
                />
              </div>
              <div className="kyc-success">
                <img src={check} />
                KYC is done Successfully
              </div>


            </div>
          </div>
          <div class="kyc-success">
            <img src={check} />
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
          {/* OTP Dialog */}
          {isOtpOpen && (
            <div className="overlay">
              <div className="dialog-box">
                <h2>Verify Aadhar OTP</h2>
                <div className="info-box">
                  Aadhar card has sent a temporary OTP to your mobile ending in ******9293 (valid for 10 mins)
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
                <button className="close-btn" onClick={() => setIsOtpOpen(false)}>✖</button>
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
  <label>
    <input
      type="checkbox"
      name="isPartOfCompany"
      checked={formData.isPartOfCompany}
      onChange={handleChange}
    />
    Part of Company
  </label>
</div>

          </div>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
              <input type="text" 
              name="diamondHub"
              value={formData.diamondHub}
                onChange={handleChange}
                placeholder="Diamond  Hub" />
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
              <input
                type="text"
                name="companyAddress"
                value={formData.companyAddress}
                onChange={handleChange}
                placeholder="Company Address"
              />
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-group">
              <input
                type="text"
                name="companyEmail"
                value={formData.companyEmail}
                onChange={handleChange}
                placeholder="Company Email"
              />
            </div>
            <div className="signIninput-group">
              <input type="text"
                name="companyContact"
                value={formData.companyContact}
                onChange={handleChange}
                placeholder="Company Contact" />
            </div>
          </div>
          <p className="CompanypersonDetails">Company Contact Person Details</p>
          <div className="signInrow">
            <div className="signIninput-singlegroup">
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name"
              />
            </div>
          </div>
          <div className="signInrow">
            <div className="signIninput-group">
              <input type="text"
              name="contactPersonEmail"
              value={formData.contactPersonEmail}
              onChange={handleChange}
              placeholder="Contact Person Email" />
            </div>
            <div className="signIninput-group">
              <input type="text"
              name="contactPersonPhone"
              value={formData.contactPersonPhone}
              onChange={handleChange}
              placeholder="Contact Person Phone" />
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
            <button className="signInbtn primary" onClick={handleSubmit}>
              Next <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupForm;
