import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

// Attach token automatically
api.interceptors.request.use((config) => {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    const token = JSON.parse(userInfo).token;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
