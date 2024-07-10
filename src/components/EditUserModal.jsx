import React from "react";

const EditUserModal = ({ selectedUser, onClose }) => {
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
            />
            <label>Lastname</label>
            <input
              type="text"
              className="form-control"
              defaultValue={selectedUser.lastname}
            />
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              defaultValue={selectedUser.email}
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
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditUserModal;
