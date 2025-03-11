import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}/api`,
  timeout: 10000, // Request timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
    // Add any other custom headers if needed
  },
});

export default api;
