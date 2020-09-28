import * as types from "../shared/types";

const defaultState = {
  categories: [{ name: "Home" }, { name: "Work" }],
};

export const categoriesReducer = (state = defaultState, action) => {
  console.log('categoriesReducer - state: ', state);
  switch (action.type) {
    case types.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };
      case types.ADD_CATEGORY_ITEM:
        return {
          ...state,
          categories: [...state.category, {name: action.name}]
        };
      case types.UPDATE_CATEGORY:
      return {
        ...state,
        categories: [{name:action.name}]
      };
    default:
      return state;
  }
};

export default categoriesReducer;
