import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query";
import resultsReducer from "./resultsSlice";
import spendingReducer from "./spendingSlice";
export const store = configureStore({
    reducer: {
        results: resultsReducer,
        spending: spendingReducer
    },
})

setupListeners(store.dispatch)