import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: "user",
    initialState: {
        email: "",
        firstname: "",
        lastname: "",
        username: ""
    },
    reducers: {
        get_infos: (state, action) => {
            state.email = action.payload.body.email;
            state.firstname = action.payload.body.firstName;
            state.lastname = action.payload.body.lastName;
            state.username = action.payload.body.userName;
        },
        remove_infos: (state) => {
            state.email = ""
            state.firstname = ""
            state.lastname = ""
            state.username = ""
        },
        edit_infos: (state, action) => {
            state.username = action.payload.body.userName;
        }

    }
});


export const { get_infos, remove_infos, edit_infos } = userSlice.actions;

export default userSlice.reducer;