import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../models";
import {
  changePassword,
  changeUserinfo,
  getUserInfo,
  userLogin,
  userRegister,
} from "../actions/userActions";
import { setToken } from "../../helpers";
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store/store'
// import { IUser } from '../../models/interfaces/interfaces';

interface UserState {
  isAuthenticated: boolean;
  user: IUser | null;
  isLoading: boolean;
  isRegister: boolean;
  error: undefined | string;
  isSaveChnages: boolean;
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: undefined,
  isRegister: false,
  isSaveChnages: false,
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    clearIsRegister: (state) => {
      state.isRegister = false;
      state.isSaveChnages = false;
    },
  },
  extraReducers: (builder) => {
    // ---------- User Registration ----------------
    builder.addCase(userRegister.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userRegister.fulfilled, (state) => {
      state.isRegister = true;
      state.isLoading = false;
    });
    builder.addCase(userRegister.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });

    // ---------- User Login -----------------------
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.error = "";
      setToken(action.payload.accessToken, true);
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // --------- Get User Info ----------------------
    builder.addCase(getUserInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.isLoading = false;
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });

    // ----------- Change Password -------------------
    builder.addCase(changePassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changePassword.fulfilled, (state) => {
      state.isLoading = false;
      state.isSaveChnages = true;
    });
    builder.addCase(changePassword.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });

    // ----------- Change more info ---------------
    builder.addCase(changeUserinfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(changeUserinfo.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.isLoading = false;
      state.isSaveChnages = true;
    });
    builder.addCase(changeUserinfo.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export const { logout, clearIsRegister } = userSlice.actions;

export default userSlice.reducer;
