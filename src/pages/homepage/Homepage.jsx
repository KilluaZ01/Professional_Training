// First: Import - React
import React, { useEffect } from "react";
import { fetchUsers } from "../../api/Api";

// Second: Make a function (Filename)
const Homepage = () => {
  // Automatic user fetch ( useEffect )
  // [] is dependency list, when should it run
  useEffect(() => {
    // Fetch all users
    fetchUsers()
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>Its Homepage!</div>;
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
