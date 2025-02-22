import React, { useState } from "react";
import { Link } from "react-router-dom";
import { registerApi } from "../../api/Api";

const NewRegister = () => {
  // Making useState for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for Error
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  //Validation
  const Validation = () => {
    let isValid = true;

    if (firstName === "") {
      setFirstNameError("Please Enter Your FirstName");
      isValid = false;
    } else {
      setFirstNameError("");
    }
    if (lastName === "") {
      setLastNameError("Please Enter Your LastName");
      isValid = false;
    } else {
      setLastNameError("");
    }
    if (email === "") {
      setEmailError("Please Enter Your email");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (password === "") {
      setPasswordError("Please Enter Your password");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }
    return isValid;
  };

  // Submit Function
  const handleRegister = (e) => {
    e.preventDefault();

    //Validation
    const isValid = Validation();
    if (!isValid) {
      return; // Stop the process
    }

    // now, form is valid
    // data - JSON
    // Making JSON | Key : Value | Key should be match to db

    const data = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    };

    // Calling API
    registerApi(data)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          alert("User Created Successfully!");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Server Error!");
      });
  };

  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row h-100">
        <div className="bg-black bg-gradient  col-6 d-flex align-items-center justify-content-center">
          <img src="./assets/images/banner2.png" alt="Logo" />
        </div>
        <div className="col-6 d-flex flex-column align-items-center justify-content-center">
          <h1 className="">Register</h1>
          <form className="w-75">
            <label htmlFor="firstname">Firstname</label>
            <input
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              id="firstname"
              placeholder="Enter your firstname"
            />

            {firstNameError && <p className="text-danger">{firstNameError}</p>}

            <label htmlFor="lastname">Lastname</label>
            <input
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              id="lastname"
              placeholder="Enter your firstname"
            />

            {lastNameError && <p className="text-danger">{lastNameError}</p>}

            <label className="mt-2" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Enter your email"
            />
            {emailError && <p className="text-danger">{emailError}</p>}

            <label className="mt-2" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Enter your password"
            />
            {emailError && <p className="text-danger">{passwordError}</p>}
            <div className="form-check mt-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="autoSizingCheck"
              />
              <label className="form-check-label" htmlFor="autoSizingCheck">
                I agree to all statements included in
                <span className="text-info"> terms of services</span>
              </label>
            </div>
            <button
              onClick={handleRegister}
              className="btn btn-dark mt-3 w-100"
            >
              Sign up
            </button>
            <Link className="text-decoration-none text-black" to={"/Login"}>
              Already have an account?
              <span className="text-info"> Log in</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewRegister;
