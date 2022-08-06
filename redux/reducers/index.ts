import productsListReducer from "./productsListReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import productCategoriesReducer from "./productCategoriesReducer";
import sortReducer from "./sortReducer";

const combinedReducers = combineReducers({
  productsList: productsListReducer,
  productCategories: productCategoriesReducer,
  chosenOption: sortReducer,
});

const persistedReducers = persistReducer(
  { key: "rootPersistor", storage, whitelist: [""] },
  combinedReducers
);

export default persistedReducers;
