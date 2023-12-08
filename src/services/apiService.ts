import axios from "axios";
import { BASE_URL } from "../constants";
import { deleteToken, getToken } from "./../helpers";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(function (config) {
  config.headers.Authorization = `Bearer ${getToken()}`;
  return config;
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    if (error.code === "ERR_BAD_REQUEST") {
      deleteToken();
      window.location.pathname = "/signin";
    }
    return Promise.reject(error);
  }
);

export default instance;
