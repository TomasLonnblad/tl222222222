import { combineReducers } from "redux";
import { sidebarReducer } from "./sidebar";

export const rootReducer = combineReducers({
  sidebar: sidebarReducer,
});
