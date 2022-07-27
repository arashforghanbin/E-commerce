import productsListReducer from "./productsListReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const combinedReducers = combineReducers({
  productsList: productsListReducer,
});

const persistedReducers = persistReducer(
  { key: "rootPersistor", storage, whitelist: [""] },
  combinedReducers
);

export default persistedReducers;
