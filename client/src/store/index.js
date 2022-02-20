import { configureStore } from '@reduxjs/toolkit';
import lumberProductSlice from './lumberProductsSlice';

export default configureStore({
    reducer: {
        lumberProducts: lumberProductSlice
    }
});