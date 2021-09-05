import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query";
import resultsReducer from "./resultsSlice";
import spendingReducer from "./spendingSlice";
import paramReducer from "./paramSlice";
export const store = configureStore({
    reducer: {
        results: resultsReducer,
        spending: spendingReducer,
        param: paramReducer,
    },
})

setupListeners(store.dispatch)