/** @format */

import { combineReducers } from "redux";

import addProductReducer from "./addProduct/reducer";

const rootReducer = combineReducers({
	addProduct: addProductReducer,
});

export default rootReducer;
