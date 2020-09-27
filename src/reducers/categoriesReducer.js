import * as types from "../shared/types";

const defaultState = {
  categories: [{ name: "Home" }, { name: "Work" }],
};

export const categoriesReducer = (state = defaultState, action) => {
  console.log("action.categories: ", action);
  switch (action.type) {
    case types.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
