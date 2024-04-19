import { configureStore } from "@reduxjs/toolkit"
import coinReducer from "./coinsSlice";

const store = configureStore({
    reducer: {
        coins: coinReducer,
    }
})

export default store;