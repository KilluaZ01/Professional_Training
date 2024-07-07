import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorFName, setErrorFName] = useState("");
  const [errorLName, setErrorLName] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const handleChangeFName = (e) => {
    setFName(e.target.value);
  };

  const handleChangeLName = (e) => {
    setLName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClickSignup = (e) => {
    e.preventDefault();

    if (!validation) {
      return;
    }
  };

  const validation = () => {
    let isValid = true;

    if (fName === "") {
      setErrorFName("First Name is required");
      isValid = false;
    }
  };

  return (
    <div className="container m-5">
      <h3 className="text-center">Create your Account!</h3>

      <div className="row justify-content-center">
        <form className="col-12 col-md-8 col-lg-6 col-xl-4 register-form">
          <label>First Name</label>
          <input
            onChange={handleChangeFName}
            type="text"
            placeholder="Enter your first name"
          />
          <label>Last Name</label>
          <input
            onChange={handleChangeLName}
            type="text"
            placeholder="Enter your lastname"
          />
          <label htmlFor="Phone">Phone Number</label>
          <input
            onChange={handleChangePhone}
            type="number"
            placeholder="Enter your phonenumber"
          />
          <label>Email</label>
          <input
            onChange={handleChangeEmail}
            type="email"
            placeholder="Enter your email address"
          ></input>
          <label>Password</label>
          <input
            onChange={handleChangePassword}
            type="password"
            placeholder="Enter your password"
          />
          <label htmlFor="photo">Photo</label>
          <input type="file" />
          <button onClick={handleClickSignup}>Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
