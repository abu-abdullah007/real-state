import { configureStore } from "@reduxjs/toolkit";
import searchReducer from '../features/searchSlice'
import APIDataReducer from '../features/fetchDataSlice'

export const store = configureStore({
    reducer:{
        search: searchReducer,
        api:APIDataReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch