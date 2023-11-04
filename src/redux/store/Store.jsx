import { configureStore } from '@reduxjs/toolkit';
import { DemoAPI } from '../api/DemoAPI';
import { setupListeners } from '@reduxjs/toolkit/query';
import DemoReducer from '../slices/DemoSlice';

const Store = configureStore({
    reducer: {
        demo: DemoReducer,
        // Add the generated reducer as a specific top-level slice
        [DemoAPI.reducerPath]: DemoAPI.reducer
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(DemoAPI.middleware)
});

export default Store;
