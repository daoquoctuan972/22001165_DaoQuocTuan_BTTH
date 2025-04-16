import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const storeToolkit = configureStore({
    reducer: {
        counter: counterSlice
    }
});