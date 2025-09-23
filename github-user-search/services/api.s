import axios from "axios";
const token = import.meta.env.VITE_APP_GITHUB_API_KEY;


const api = axios.create({
  baseURL: "https://api.github.com",
});

export default api;
