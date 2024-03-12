import axios from "axios";

const API_BASE_URL = "https://fakestoreapi.com";

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use(
  function (config) {
    config.timeout = 5000;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
