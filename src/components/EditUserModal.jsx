import React, { useState } from "react";
import { updateUser } from "../api/Api";

const EditUserModal = ({ selectedUser, onClose }) => {
  // State form data
  const [formData, setFormData] = useState({
    firstname: selectedUser.firstname,
    lastname: selectedUser.lastname,
    email: selectedUser.email,
  });

  // onChange Value Changes
  const handleChange = (e) => {
    // destructure the e - event
    const { id, value } = e.target;

    // set the form data
    setFormData({ ...formData, [id]: value }); // ...formData is previous values
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Actual Api
    updateUser(selectedUser.id, formData)
      .then((res) => {
        if (res.statusText === "OK") {
          alert("User Updated!");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Server Error!");
      });
  };

  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">
              Edit User for{" "}
              <span className="text-success">{selectedUser.firstname}</span>
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <label>Firstname</label>
            <input
              type="text"
              className="form-control"
              defaultValue={selectedUser.firstname}
              onChange={handleChange}
              id="firstname"
            />
            <label>Lastname</label>
            <input
              type="text"
              className="form-control"
              defaultValue={selectedUser.lastname}
              onChange={handleChange}
              id="lastname"
            />
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              defaultValue={selectedUser.email}
              onChange={handleChange}
              id="email"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
