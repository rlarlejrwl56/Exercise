import loginReducer from "./slices/loginSlice";
import {createWrapper} from "next-redux-wrapper";
import {getDefaultMiddleware, configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger";
import loadingReducer from './slices/loginSlice';
import storageSession from 'redux-persist/lib/storage/session';
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key : "root",
    storage : storageSession,
    whitelist : ['isLogin'],
};

const persistedReducer = persistReducer(persistConfig, loginReducer);
export const store = configureStore({
    reducer : persistedReducer,
    middleware : getDefaultMiddleware =>
        getDefaultMiddleware().concat(logger),
    devTools : true,
    });

const setupStore = ()=>store;
export const persistor = persistStore(store);
const makeStore = () =>setupStore()
const  wrapper = createWrapper(makeStore);

export default wrapper;