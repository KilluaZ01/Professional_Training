import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"

    }
})

// Making our first api POST /users | Register

export const registerApi = () => Api.post("/users")