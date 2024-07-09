// First: Import - React
import React, { useEffect } from "react";
import { fetchUsers } from "../../api/Api";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux_storage/userSlice";

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
          <tr>
            <td>123</td>
            <td>Sujan</td>
            <td>Baidhya</td>
            <td>ILove69@gmail.com</td>
            <td>
              <di className="btn-group">
                <button className="btn btn-success">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </di>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

// Export
export default Homepage;

/*

Logic
1. Fetch user information
2. Automatic
3. Trigger redux storage ( addUser )
4. Storage has data
5. Fetch from storage
6. Displaying in UI

*/
