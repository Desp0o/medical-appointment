import { createSlice } from "@reduxjs/toolkit";

const triggerSlice = createSlice({
    name: "triggerSlice",
    initialState: {
        value: false
    },
    reducers: {
        setActivateTrigger(state) {
            state.value = !state.value;            
        }
    }
})

export const { setActivateTrigger } = triggerSlice.actions;
export default triggerSlice.reducer;
