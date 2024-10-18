import { createSlice } from '@reduxjs/toolkit'


export const loginSlice = createSlice({
    name: "login",
    initialState: {
        username: "",
        password: "",
        isLoggedIn: false,
    },
    reducers: {
        login: (state, action) => {
            state.username = action.payload.email;
            state.password = action.payload.password;
            state.isLoggedIn = true;
        },

        logout: (state) => {
            state.username = "";
            state.password = "";
            state.isLoggedIn = false;
        }
    }
});


export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;