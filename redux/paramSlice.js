import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    forecast: ""
}

export const paramSlice = createSlice({
    name: "param",
    initialState,
    reducers: {
        setParam: (state, action) => {
            return {forecast: action.payload}
        }
    }
})

export const {setParam} = paramSlice.actions
export default paramSlice.reducer