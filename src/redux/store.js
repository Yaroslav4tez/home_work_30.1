import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./ListReducer";
import loadingReducer from "./loadingReducer";
import newTaskReducer  from "./newTaskReducer";
import { createStore ,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
    list: [],
    isLoading: false,
    newTask: {
        text: '',
        isDone: false
    }
};

/*const store = configureStore({
    reducer: {
        list: listReducer,
        isLoading: loadingReducer,
        newTask: newTaskReducer,
    },
    preloadedState: initialState
});
*/

const reducer = combineReducers({
    list: listReducer,
    isLoading: loadingReducer,
    newTask: newTaskReducer
});

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;