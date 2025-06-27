import axios from "axios";

const isLocalhost = window.location.hostname === "localhost";

const API_BASE_URL = isLocalhost
  ? "http://localhost:5000"
  : "https://shoesbackend-3.onrender.com";

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`, // Ab tum "/recommend" jaise endpoint se kaam loge
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true // Optional: agar login/cookies use kar rahe ho
});

export default api;
