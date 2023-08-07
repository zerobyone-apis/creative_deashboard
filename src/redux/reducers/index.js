import ThemeReducer from "./ThemeReducer";
import { UserReducer } from "./UserReducer";
import { combineReducers } from "redux";

export const reducer = combineReducers({ ThemeReducer, UserReducer });
