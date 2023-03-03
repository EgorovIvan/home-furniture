import logger from "redux-logger";
import rootReducer from "../../reducers"
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, logger],
    devTools: process.env.NODE_ENV !== 'production',
})

