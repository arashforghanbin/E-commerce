import { configureStore } from "@reduxjs/toolkit";
import persistedReducers from "./reducers";
import { persistStore } from "redux-persist";

export const store = configureStore(persistedReducers);
export const persistore = persistStore(store);
