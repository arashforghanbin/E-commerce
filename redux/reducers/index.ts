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
import cartProductsReducer from "./cartProductsReducer";
import userInfoReducer from "./userInfoReducer";
import totalCartPriceReducer from "./totalCartPriceReducer";

const combinedReducers = combineReducers({
  productsList: productsListReducer,
  productCategories: productCategoriesReducer,
  chosenOption: sortReducer,
  filterReducer,
  modalReducer,
  addUserReducer,
  userLoginReducer,
  cartProductsReducer,
  userInfoReducer,
  totalCartPriceReducer,
});

const persistedReducers = persistReducer(
  {
    key: "rootPersistor",
    storage,
    whitelist: [
      "userLoginReducer",
      "cartProductsReducer",
      "userInfoReducer",
      "totalCartPriceReducer",
    ],
  },
  combinedReducers
);

export default persistedReducers;
