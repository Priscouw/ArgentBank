import { createSlice } from '@reduxjs/toolkit'


export const loginSlice = createSlice({
    name: "login",
    initialState: {
        username: "",
        isLoggedIn: false,
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.email;
            state.isLoggedIn = true;
        },

        logout: (state) => {
            state.username = "";
            state.isLoggedIn = false;
        }
    }
});


export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;