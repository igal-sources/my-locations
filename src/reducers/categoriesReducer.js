import * as types from "../shared/types";

const defaultState = {
  categories: [{ name: "Home" }, { name: "Work" }],
};

export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
    case types.ADD_CATEGORY_ITEM:
      return {
        ...state,
        categories: [...state.categories, { name: action.name }],
      };
    case types.UPDATE_CATEGORY:
      return {
        ...state,
        name: action.name,
      };
    case types.REMOVE_CATEGORY:
      var array = [...state.categories];
      const index = array.findIndex((x) => x.name === action.name);
      if (index !== -1) {
        array.splice(index, 1);
        console.log("REMOVE_CATEGORY array: ", array);
      }
      return { categories: [...array] };
    default:
      return state;
  }
};

export default categoriesReducer;
