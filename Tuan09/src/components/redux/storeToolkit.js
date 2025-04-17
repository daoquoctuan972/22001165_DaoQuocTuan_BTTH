import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import themeReducer from "../theme/themeSlice";
import todoReducer from "../todo/todoSlice";
import cartReducer from "../cart/cartSlice";
import authSlice from "../login/loginSlice";

export const storeToolkit = configureStore({
    reducer: {
        counter: counterSlice,
        theme: themeReducer,
        todo: todoReducer,
        cart: cartReducer,
        auth: authSlice,
    }
});