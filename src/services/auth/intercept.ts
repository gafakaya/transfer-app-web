import axios from "axios";
import refresh from "./refresh";

const isProd: boolean = false;

export const BASE_URL = "http://localhost:3001/";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem(`AT_KEY`);
//     if (token) {
//       config.headers!["Authorization"] = "Bearer " + token;
//     }
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;
      await refresh();
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);
