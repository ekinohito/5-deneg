import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    ready: false
}

export const spendingSlice = createSlice({
    name: "spending",
    initialState,
    reducers: {
        setSpending: (state, action) => {
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

export const {setSpending, clear, refresh} = spendingSlice.actions
export default spendingSlice.reducer