import ThemeReducer from "./ThemeReducer";
import { UserReducer } from "./LoginReducer";
import { combineReducers } from "redux";

export const reducer = combineReducers({ ThemeReducer, UserReducer });
