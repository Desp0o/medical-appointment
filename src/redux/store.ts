import { configureStore } from "@reduxjs/toolkit";
import activeTabSlice from "./activeTabSlice";
import userSlicer from "./userSlicer";


const store = configureStore({
    reducer:{
        activeTabStore: activeTabSlice,
        userStore: userSlicer
    }
})

export default store
