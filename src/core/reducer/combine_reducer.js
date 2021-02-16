import {combineReducers} from "redux";
import {app_reducer} from "./app_reducer";

export default combineReducers({
    app: app_reducer
})