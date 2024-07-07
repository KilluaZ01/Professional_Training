import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:5000",
    headers: {
        "Content-Type": "application/json"
    }
})

// Making our first api POST /users | Register

export const registerApi = (data) => Api.post("/users", data)
//Complete URL: http://localhost:5000/users

//Login API
export const loginApi = (email) => Api.get(`/users?email=${email}`)