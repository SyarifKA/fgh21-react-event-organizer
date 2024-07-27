import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    listEvent: []
}

const event = createSlice({
    name: 'event',
    initialState,
    reducers: {
        createEvent: (state, action) => {
            state.listEvent = action.payload
        }
    }
})

export const { createEvent } = event.actions;
export default event.reducer;  