import { useState } from "react";
import React from "react";
import "./Login.css";

const Login = () => {
  // Making State for Email and Password
  // for storing the input

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State, for storing error message
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Storing Changes to above Variables
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // Form Validation
  const validation = () => {
    // Make a state, that track if form is valid
    let isValid = true;

    // Check Email is empty
    if (email === "") {
      setEmailError("Email is Required!");
      isValid = false;
    } else if (password === "") {
      setPasswordError("Password is Required!");
      isValid = false;
    }

    return isValid;
  };

  // function for button
  const handleClickLogin = (e) => {
    // If button is clicked, dont reload
    e.preventDefault();

    // Validation
    if (!validation()) {
      return;
    }
    // Open Dashboard
  };

  return (
    <div className="login-container">
      <h3>Login to your account!</h3>

      <form className="login-form">
        <label htmlFor="email">Email Address</label>
        <input
          onChange={handleChangeEmail}
          type="email"
          placeholder="Enter Your Email"
        ></input>

        {emailError && <p className="error-text">{emailError}</p>}

        <label htmlFor="password">Password</label>
        <input
          onChange={handleChangePassword}
          type="password"
          placeholder="Enter Your Password"
        />
        {passwordError && <p className="error-text">{passwordError}</p>}
        <p>Forgot your password?</p>
        <button onClick={handleClickLogin} className="login-btn">
          Login
        </button>
        <p>Dont have an account? Create an account</p>
      </form>
    </div>
  );
};

export default Login;

/* 

What We Did?

1. Login Page Banayo
2. Implemented CSS
3. Make a State for temporary saving
4. Function - for changing state
5. Assigned to respective input (onChange)
6. Validation (Input are empty?, Setting error)
7. Function for button (Prevent page form reload)
8. Function - Validation (Form)
9. Button - (onClick - Assigned)

Task
Make same for Register page
First Name, Last Name, Email, Phone, Password, and Profile

*/
