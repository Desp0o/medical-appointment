import { configureStore } from "@reduxjs/toolkit";
import activeTabSlice from "./activeTabSlice";
import userSlicer from "./userSlicer";
import triggerSlice from "./triggerSlice";


const store = configureStore({
    reducer:{
        activeTabStore: activeTabSlice,
        userStore: userSlicer,
        trigerStore: triggerSlice
    }
})

export default store
