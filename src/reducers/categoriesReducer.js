import * as types from "../shared/types";

const defaultState = {
  categories: [
    { id: 1, name: "Home" },
    { id: 2, name: "Work" },
  ],
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
        categories: [...state.categories, action.category ],
      };
    case types.UPDATE_CATEGORY:
      const ind = state.categories.findIndex(category => category.id === action.category.id)
      return {
        ...state,
        ...state.categories[ind] = action.category,
      };
    case types.REMOVE_CATEGORY:
      return state.categories.filter(c => c.id !== action.category.id);
    default:
      return state;
  }
};

export default categoriesReducer;
