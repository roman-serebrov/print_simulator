import {createStore} from "redux";
import combineReducer from "../core/reducer/combine_reducer";
import {applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
export const store = createStore(combineReducer, applyMiddleware(thunkMiddleware))