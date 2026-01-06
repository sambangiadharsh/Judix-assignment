import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import SignupForm from "./SignupForm.jsx";
import "./style.css";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 simple email regex
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


  const isStrongPassword = (password) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return regex.test(password);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔴 FRONTEND VALIDATION
    if (!name.trim()) {
      return toast.error("Name is required");
    }

    if (!email.trim()) {
      return toast.error("Email is required");
    }

    if (!isValidEmail(email)) {
      return toast.error("Enter a valid email");
    }

    if (!password) {
      return toast.error("Password is required");
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters");
    }
    if (!isStrongPassword(password)) {
    return toast.error(
      "Password must contain uppercase, lowercase, number, special character and be at least 8 characters long"
    );
  }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_KEY}/signup`,
        { name, email, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(response.data.message || "Signup successful", {
        position: toast.POSITION.TOP_CENTER,
      });

      navigate("/");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Signup failed",
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    }
  };

  return (
    <section className="auth-section">
      <div className="form-container">
        <div className="content">
          <h2>Signup</h2>
          <SignupForm
            name={name}
            email={email}
            password={password}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default Signup;
