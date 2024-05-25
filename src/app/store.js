import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features2/CartSlice";
import searchReducer from "../features2/SearchSlice";
import categoryReducer from "../features2/CategorySlice"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        search: searchReducer,
        category: categoryReducer
    },
});
