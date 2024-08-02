import { createSlice } from "@reduxjs/toolkit";

const updateDocSlicer = createSlice({
    name:"updateDocSlicer",
    initialState:{
        avatar: '',
        name: '',
        profile: '',
        workExp: 0
    },
    reducers:{
        setUpdateDoctorInfo(state, action){
            state.avatar = action.payload
            state.name = action.payload
            state.profile = action.payload
            state.workExp = action.payload
        }
    }
})

export const { setUpdateDoctorInfo } = updateDocSlicer.actions;
export default updateDocSlicer.reducer;