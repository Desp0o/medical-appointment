import { createSlice } from "@reduxjs/toolkit";

const userSlicer = createSlice({
    name:"userSlicer",
    initialState:{
        userName: localStorage.getItem("userName") || '',
        isAuthenticated: Boolean(localStorage.getItem("isAuthenticated")) || false
    },
    reducers:{
        setUser(state,action){
            state.userName = action.payload
            state.isAuthenticated = action.payload
        }

    }
})

export const { setUser } = userSlicer.actions
export default userSlicer.reducer