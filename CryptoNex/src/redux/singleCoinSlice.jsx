import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
export const apiCall = createAsyncThunk(
    "apiCallForCoinDetail",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`, {
                headers: {
                    accept: 'application/json',
                    'x-cg-demo-api-key': 'CG-8QaRqe6fL3SXzBNNhuKrgUvZ'
                }
            });

            return response.data;
        } catch (error) {
            console.log(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }


)
const SingleCoinSlice = createSlice({
    name: "singleCoin",
    initialState: {
        data: null,
        pending: true,
        received: false,
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(apiCall.pending, (state, action) => {
            state.pending = true
        })
        builder.addCase(apiCall.fulfilled, (state, action) => {
            state.data = action.payload;
            state.pending = false
            state.received = true
        })
        builder.addCase(apiCall.rejected, (state, action) => {
            state.pending = true
            state.received = true
            state.error = action.error
        })
    }


})
export default SingleCoinSlice.reducer