import { createSlice } from "@reduxjs/toolkit";

const activeTabSlice = createSlice({
    name:"activeTabSlice",
    initialState:{
        value: "main"
    },
    reducers:{
        setActiveTab(state, action){
            state.value = action.payload
        }
    }
})

export const { setActiveTab } = activeTabSlice.actions
export default activeTabSlice.reducer