import { createSlice } from "@reduxjs/toolkit";

const userSlicer = createSlice({
    name:"userSlicer",
    initialState:{
        userName: localStorage.getItem("userName") || ''
    },
    reducers:{
        setUserName(state,action){
            state.userName = action.payload
        }
    }
})

export const { setUserName } = userSlicer.actions
export default userSlicer.reducer