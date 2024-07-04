import React from "react";

const NewRegister = () => {
  return (
    <div className="container-fluid" style={{ height: "100vh" }}>
      <div className="row h-100">
        <div className="col-6 d-flex align-items-center justify-content-center">
          <img src="./assets/images/banner2.png" alt="Logo" />
        </div>
        <div className="col-6 d-flex flex-column align-items-center justify-content-center">
          <h1 className="">Register</h1>
          <form className="w-75">
            <label htmlFor="firstname">Firstname</label>
            <input
              className="form-control"
              type="text"
              id="firstname"
              placeholder="Enter your firstname"
            />
            <label className="mt-2" htmlFor="lastname">
              Lastname
            </label>
            <input
              className="form-control"
              type="text"
              id="lastname"
              placeholder="Enter your lastname"
            />
            <label className="mt-2" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
            <label className="mt-2" htmlFor="password">
              Password
            </label>
            <input
              className="form-control"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
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
            <button className="btn btn-dark mt-3 w-100">Sign up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewRegister;
