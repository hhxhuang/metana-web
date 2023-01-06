import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://18.223.55.98:8000",
  timeout: 50000, // request timeout
  headers: {
  },
});

export default axiosInstance;
