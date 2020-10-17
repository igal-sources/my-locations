import titleReducer from "./titleReducer";
import toolbarReducer from "./toolbarReducer";
import categoriesReducer from "./categoriesReducer";
import locationsReducer from "./locationsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  titleReducer,
  toolbarReducer,
  categoriesReducer,
  locationsReducer,
});

export default rootReducer;
