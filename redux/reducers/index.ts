import productsListReducer from "./productsListReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import productCategoriesReducer from "./productCategoriesReducer";
import sortReducer from "./sortReducer";
import filterReducer from "./filterReducer";
import modalReducer from "./modalReducer";
import addUserReducer from "./addUserReducer";
import userLoginReducer from "./userLoginReducer";

const combinedReducers = combineReducers({
  productsList: productsListReducer,
  productCategories: productCategoriesReducer,
  chosenOption: sortReducer,
  filterReducer,
  modalReducer,
  addUserReducer,
  userLoginReducer,
});

const persistedReducers = persistReducer(
  { key: "rootPersistor", storage, whitelist: ["userLoginReducer"] },
  combinedReducers
);

export default persistedReducers;
