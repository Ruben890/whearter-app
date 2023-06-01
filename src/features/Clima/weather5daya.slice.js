import { createSlice } from "@reduxjs/toolkit";

const weather5day = createSlice({
    name: 'weather5day',
    initialState: {
        data: []
    },
    reducers: {
        setClima5day: (state, action) => {
            state.data = action.payload;
        },
    },
})

export const { setClima5day } = weather5day.actions
export default weather5day.reducer