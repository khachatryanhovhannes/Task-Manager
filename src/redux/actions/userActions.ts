import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/apiService";
import { IUserChangeData, IUserLogin, IUserRegister } from "../../models";
import axios from "axios";

const userRegister = createAsyncThunk(
  "user/register",
  async (newUserData: IUserRegister) => {
    try {
      const res = await instance.post("/auth/register", newUserData);
      const data = res.data;
      return data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return Promise.reject(error.response.data.message);
      } else {
        return Promise.reject("Something Wrong");
      }
    }
  }
);

const userLogin = createAsyncThunk(
  "user/login",
  async (userLoginData: IUserLogin) => {
    try {
      const res = await instance.post("/auth/login", userLoginData);
      const data = await res.data;
      return data.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return Promise.reject(error.response.data.message);
      } else {
        return Promise.reject("Something Wrong");
      }
    }
  }
);

const getUserInfo = createAsyncThunk("user/profile", async () => {
  try {
    const res = await instance.get("/users/profile");
    const data = await res.data;
    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return Promise.reject(error.response.data.message);
    } else {
      return Promise.reject("Something Wrong");
    }
  }
});

const changeUserinfo = createAsyncThunk(
  "user/profilChange",

  async (newData: IUserChangeData) => {
    try {
      const res = await instance.patch("/users/profile", {
        email: newData.newEmail,
        firstName: newData.firstName,
        lastName: newData.lastName,
      });
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return Promise.reject(error.response.data.message);
      } else {
        return Promise.reject("Something Wrong");
      }
    }
  }
);

const changePassword = createAsyncThunk(
  "user/changePassword",
  async (newPassword: string) => {
    try {
      const res = await instance.patch("/auth/password", { newPassword });
      console.log(res);
      return res.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return Promise.reject(error.response.data.message);
      } else {
        return Promise.reject("Something Wrong");
      }
    }
  }
);

export { getUserInfo, userLogin, userRegister, changeUserinfo, changePassword };
