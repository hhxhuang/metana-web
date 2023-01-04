import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://ec2-3-144-36-228.us-east-2.compute.amazonaws.com:8000",
  timeout: 50000, // request timeout
  headers: {
  },
});

export default axiosInstance;
