import React from "react";

const NewRegister = () => {
  return (
    <div className="container m-5">
      <h3 className="text-success">
        Create your <span className="text-dark">Account!</span>{" "}
      </h3>
      <form className="w-50 shadow p-4 rounded-4">
        <label htmlFor="firstname">Firstname</label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter your firstname"
        />
        <label className="mt-2" htmlFor="lastname">
          Lastname
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter your lastname"
        />
        <label className="mt-2" htmlFor="email">
          Email
        </label>
        <input
          className="form-control"
          type="email"
          placeholder="Enter your email"
        />
        <label className="mt-2" htmlFor="password">
          Password
        </label>
        <input
          className="form-control"
          type="password"
          placeholder="Enter your password"
        />
        <button className="btn btn-dark mt-3 w-100">Sign up</button>
      </form>
    </div>
  );
};

export default NewRegister;
