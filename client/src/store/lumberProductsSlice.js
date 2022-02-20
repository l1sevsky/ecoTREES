import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosRequest, {transformPricelists} from './axiosRequestPattern';


export const requestProducts = createAsyncThunk(
    'lumberProducts/requestProducts',
    (_, {rejectWithValue}) => axiosRequest({ url: 'lumber/product', method: 'get'}, rejectWithValue)
);

export const requestProductPricelists = createAsyncThunk(
    'lumberProducts/requestProductPricelists',
    (productId, {rejectWithValue}) => axiosRequest({ 
        url: 'lumber/pricelist', 
        method: 'get',
        params: {
            productId: productId
        },
        transformResponse: [transformPricelists]
    }, rejectWithValue)
);

const lumberProductSlice = createSlice({
    name: 'lumberProducts',
    initialState: {
        productList: [],

        currentProduct: {
            pricelists: [],

            isLoading: false,
            isError: false,
            lastLoadingMessage: ''
        },

        isLoading: false,
        isError: false,
        lastLoadingMessage: ''
    },
    reducers: {},
    extraReducers: {
        [requestProducts.pending]: (state) => {
            state.isLoading = true;
            state.isError = false;
        },
        [requestProducts.fulfilled]: (state, action) => {
            state.productList = action.payload.notes;
            state.lastLoadingMessage = action.payload.message;
            state.isLoading = false;
        },
        [requestProducts.rejected]: (state, action) => {
            state.lastLoadingMessage = action.payload.message;
            state.isError = true;
            state.isLoading = false;
        },

        [requestProductPricelists.pending]: (state) => {
            state.currentProduct.isLoading = true;
            state.currentProduct.isError = false;
        },
        [requestProductPricelists.fulfilled]: (state, action) => {
            state.currentProduct.pricelists = action.payload.notes;
            state.currentProduct.lastLoadingMessage = action.payload.message;
            state.currentProduct.isLoading = false;
        },
        [requestProductPricelists.rejected]: (state, action) => {
            state.currentProduct.lastLoadingMessage = action.payload.message;
            state.currentProduct.isError = true;
            state.currentProduct.isLoading = false;
        }
    }
});


export default lumberProductSlice.reducer;