// First: Import - React
import React, { useEffect, useState } from "react";
import { fetchUsers } from "../../api/Api";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux_storage/userSlice";
import EditUserModal from "../../components/EditUserModal";

// Second: Make a function (Filename)
const Homepage = () => {
  //Make a dispatch
  const dispatch = useDispatch();

  // Selector (Select from storage)
  const users = useSelector((state) => state.users.users);

  // Automatic user fetch ( useEffect )
  // [] is dependency list, when should it run
  useEffect(() => {
    // Fetch all users
    fetchUsers()
      .then((res) => {
        console.log(res.data);

        // Adding user to redux

        dispatch(addUser(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // For editing users
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function for open and close
  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  return (
    <>
      {/* table */}
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((singleUser) => (
            <tr>
              <td>{singleUser.id}</td>
              <td>{singleUser.firstname}</td>
              <td>{singleUser.lastname}</td>
              <td>{singleUser.email}</td>
              <td>
                <di className="btn-group">
                  <button
                    className="btn btn-success"
                    onClick={() => handleOpenModal(singleUser)}
                  >
                    Edit
                  </button>
                  <button className="btn btn-danger">Delete</button>
                </di>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* if user click edit, then only show modal */}
      {isModalOpen && (
        <EditUserModal selectedUser={selectedUser} onClose={handleCloseModal} />
      )}
    </>
  );
};

// Export
export default Homepage;

// Mapping [{user1},{user2}]
// index:0,1,2,3,4,5

/*

Logic
1. Fetch user information
2. Automatic
3. Trigger redux storage ( addUser )
4. Storage has data
5. Fetch from storage
6. Displaying in UI

*/

/* 
  Logic for edit data
  Data = Table (Row - Button - Edit)
  Select that specific user
  Open the popup modal, with that selected data
  Fill the modal
*/
