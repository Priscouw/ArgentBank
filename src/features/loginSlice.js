import { createSlice } from '@reduxjs/toolkit'



export const loginSlice = createSlice({
    name: "login",
    initialState: {
        token: sessionStorage.getItem("token") || null,
        isLoggedIn: sessionStorage.getItem("token") ? true : false,
    },
    reducers: {
        login: (state, action) => {
            state.token = action.payload.body.token
            state.isLoggedIn = true;
            sessionStorage.setItem("token", action.payload.body.token)
        },

        logout: (state) => {
            state.token = null;
            state.isLoggedIn = false;
            sessionStorage.removeItem("token")
        }
    }
});


export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;