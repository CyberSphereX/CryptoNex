import { configureStore } from "@reduxjs/toolkit"
import coinReducer from "./coinsSlice";
import SingleCoinReducer from "./singleCoinSlice"

const store = configureStore({
    reducer: {
        coins: coinReducer,
        singleCoin: SingleCoinReducer
    }
})

export default store;