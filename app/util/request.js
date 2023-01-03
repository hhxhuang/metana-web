import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://47.94.44.43:8976",
  timeout: 50000, // request timeout
  headers: {
  },
});

export default axiosInstance;
