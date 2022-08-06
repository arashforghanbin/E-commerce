import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import persistedReducers from "./reducers";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: persistedReducers,
  middleware: [thunk],
});
export const persistore = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
