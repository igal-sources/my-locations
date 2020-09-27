import titleReducer from "./titleReducer";
import toolbarReducer from "./toolbarReducer";
import categoriesReducer from "./categoriesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  titleReducer,
  toolbarReducer,
  categoriesReducer
});

export default rootReducer;
