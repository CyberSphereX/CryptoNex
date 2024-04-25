import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"


export const apiCall = createAsyncThunk(
    "coins/getCoinsData",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', {
                headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-8QaRqe6fL3SXzBNNhuKrgUvZ' }
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
const coinsSlice = createSlice({
    name: "coins",
    initialState: {
        data: [],
        pending: true,
        received: false,
        error: null,

    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(apiCall.pending, (state, action) => {
            state.pending = true;
        }),
            builder.addCase(apiCall.fulfilled, (state, action) => {
                state.pending = false,
                    state.received = true,
                    state.data = action.payload;
            }),
            builder.addCase(apiCall.rejected, (state, action) => {
                state.error = action.error
                state.data = [];
            })
    }
})
export default coinsSlice.reducer
