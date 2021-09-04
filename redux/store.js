import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query";
import resultsReducer from "./resultsSlice";
export const store = configureStore({
    reducer: {
        results: resultsReducer
    },
})

setupListeners(store.dispatch)