import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import authReducer from './services/authSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { blogApi } from "./services/blogapi.js";

console.log(storage)

const persistConfig = {
    key: 'auth',
    storage: storage.default || storage
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({

    reducer: {
        auth: persistedAuthReducer,
        [blogApi.reducerPath]: blogApi.reducer,
        [api.reducerPath]: api.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }).concat(api.middleware).concat(blogApi.middleware)

})

export const persistor = persistStore(store);