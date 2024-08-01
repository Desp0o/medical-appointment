import { createSlice } from "@reduxjs/toolkit";

const docsLenghtSlicer = createSlice({
    name:"docsLenghtSlicer",
    initialState:{
        value: 0
    },
    reducers:{
        setDocsLength(state, actions){
            state.value = actions.payload
        }
    }
})

export const { setDocsLength } = docsLenghtSlicer.actions
export default docsLenghtSlicer.reducer