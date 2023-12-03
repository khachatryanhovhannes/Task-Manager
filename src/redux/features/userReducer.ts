import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../models';
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store/store'
// import { IUser } from '../../models/interfaces/interfaces';


interface UserState {
    isAuthenticated: boolean;
    user: IUser | null;
}

const initialState: UserState = {
    user: null,
    isAuthenticated: false,
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IUser>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null
        }
    },
});


export const { login, logout } = userSlice.actions;


export default userSlice.reducer;