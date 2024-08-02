import { configureStore } from "@reduxjs/toolkit";
import activeTabSlice from "./activeTabSlice";
import userSlicer from "./userSlicer";
import triggerSlice from "./triggerSlice";
import doctorsLengthSlicer from "./doctorsLengthSlicer";
import UpdateDocSlicer from "./UpdateDocSlicer";


const store = configureStore({
    reducer:{
        activeTabStore: activeTabSlice,
        userStore: userSlicer,
        triggerStore: triggerSlice,
        docsLengthStore: doctorsLengthSlicer,
        updateDocStore: UpdateDocSlicer
    }
})

export default store
