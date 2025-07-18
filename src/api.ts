import axios from "axios";

const API = axios.create({
  baseURL: "https://job-portal-backend-k1qu.onrender.com/api",
});

export default API;

