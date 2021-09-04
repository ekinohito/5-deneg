import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    ready: false
}

export const resultsSlice = createSlice({
    name: "results",
    initialState,
    reducers: {
        setResults: (state, action) => {
            return {...action.payload, ready: true}
        },
        clear: () => {
            return {ready: false}
        },
        refresh: (state) => {
            return {...state, ready: false}
        }
    }
})

export const {setResults, clear, refresh} = resultsSlice.actions
export default resultsSlice.reducer