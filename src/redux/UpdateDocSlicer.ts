import { createSlice } from "@reduxjs/toolkit";

const updateDocSlice = createSlice({
    name: "updateDocSlice",
    initialState: {
        avatar: '',
        name: '',
        profile: '',
        workExp: 0,
        docId: null,
        isFetched: false
    },
    reducers: {
        setUpdateDoctorInfo(state, action) {
            const { avatar, name, profile, workExp, isFetched, docId } = action.payload;
            state.avatar = avatar;
            state.name = name;
            state.profile = profile;
            state.workExp = workExp;
            state.docId = docId
            state.isFetched = isFetched;            
        }
    }
});

export const { setUpdateDoctorInfo } = updateDocSlice.actions;
export default updateDocSlice.reducer;
