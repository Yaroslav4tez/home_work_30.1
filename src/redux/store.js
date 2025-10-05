import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { listReducer } from "./ListReducer";
import { loadingReducer } from "./loadingReducer";

const rootReducer = combineReducers({
  list: listReducer,
  isLoading: loadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));