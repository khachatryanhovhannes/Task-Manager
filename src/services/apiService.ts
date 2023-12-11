import axios from "axios";
import { BASE_URL } from "../constants";
import { Tokens } from "../models";
import { deleteToken, getToken, setToken } from "./../helpers";

let isRefreshing = false;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = getToken(Tokens.accessToken);
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response && error.response.data.error === "Unauthorized") {
      if (!isRefreshing) {
        isRefreshing = true;
        const refreshToken = getToken(Tokens.refreshToken);
        return axios
          .post(`${BASE_URL}/auth/refresh-token`, { refreshToken })
          .then((response) => {
            setToken(Tokens.accessToken, response.data.data.accessToken, true);
            setToken(
              Tokens.refreshToken,
              response.data.data.refreshToken,
              true
            );
            originalRequest.headers.Authorization = `Bearer ${getToken(
              Tokens.accessToken
            )}`;
            return axios(originalRequest);
          })
          .catch((refreshError) => {
            if (!originalRequest._retry) {
              deleteToken(Tokens.accessToken);
              deleteToken(Tokens.refreshToken);
              // window.location.pathname = "/signin";
            }
            return Promise.reject(refreshError);
          })
          .finally(() => {
            isRefreshing = false;
          });
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
