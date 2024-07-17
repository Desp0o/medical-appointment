import { configureStore } from "@reduxjs/toolkit";
import activeTabSlice from "./activeTabSlice";


const store = configureStore({
    reducer:{
        activeTabStore: activeTabSlice
    }
})

export default store
