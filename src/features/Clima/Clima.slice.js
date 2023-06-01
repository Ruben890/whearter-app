import { createSlice } from "@reduxjs/toolkit";

const clima = createSlice({
    name: 'clima',
    initialState: {
        data: []
    },
    reducers: {
        setClima: (state, action) => {
            state.data = action.payload;
        },
    },
})

export const { setClima } = clima.actions
export default clima.reducer