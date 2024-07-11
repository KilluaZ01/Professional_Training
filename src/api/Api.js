import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Making our first api POST /users | Register

export const registerApi = (data) => Api.post("/users", data);
//Complete URL: http://localhost:5000/users

//Login API
export const loginApi = (email) => Api.get(`/users?email=${email}`);

// Fetch User API
export const fetchUsers = () => Api.get("/users");

// Update user API
export const updateUser = (id, data) => Api.put(`/users/${id}`, data);

// Delete user API
export const deleteUser = (id) => Api.delete(`/users/${id}`);
