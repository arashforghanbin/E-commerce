import { createStore } from "@reduxjs/toolkit";
import persistedReducers from "./reducers";
import { persistStore } from "redux-persist";

export const store = createStore(persistedReducers);
export const persistore = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;