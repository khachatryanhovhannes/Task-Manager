import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../services/apiService";
import { IUserChangeData, IUserLogin, IUserRegister } from "../../models";

const userRegister = createAsyncThunk(
  "user/register",
  async (newUserData: IUserRegister) => {
    const res = await instance.post("/auth/register", newUserData);
    const data = res.data;
    return data.data;
  }
);

const userLogin = createAsyncThunk(
  "user/login",
  async (userLoginData: IUserLogin) => {
    const res = await instance.post("/auth/login", userLoginData);
    const data = await res.data;
    return data.data;
  }
);

const getUserInfo = createAsyncThunk("user/profile", async () => {
  const res = await instance.get("/users/profile");
  const data = await res.data;
  return data.data;
});

const changeUserinfo = createAsyncThunk(
  "user/profilChange",
  async (newData: IUserChangeData) => {
    const res = await instance.patch("/users/profile", {
      email: newData.newEmail,
      firstName: newData.firstName,
      lastName: newData.lastName,
    });
    return res.data;
  }
);

const changePassword = createAsyncThunk(
  "user/changePassword",
  async (newPassword: string) => {
    const res = await instance.patch("/auth/password", { newPassword });
    console.log(res);
    return res.data;
  }
);

const refreshToken = createAsyncThunk(
  "user/refreshToken",
  async (refreshToken: string) => {
    const res = await instance.post("/auth/refresh-token", { refreshToken });
    console.log(res);
  }
);

export { getUserInfo, userLogin, userRegister, changeUserinfo, changePassword, refreshToken };
