import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/loginSlice.js"

const store = configureStore({
    reducer: {
        login: loginReducer,
    },
})

export default store;