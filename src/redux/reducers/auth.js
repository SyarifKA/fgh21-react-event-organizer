import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authLogin: (state, action) => {
            state.token = action.payload
        },
        authLogout: (state, action) => {
            state.token = null
        }
    }
})

export const { authLogin, authLogout } = auth.actions;
export default auth.reducer;  