import axios from "axios";

const API = axios.create({
  baseURL: "https://expense-tracker-backend-pvu4.onrender.com/api"
});

// 🔐 Attach token to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
