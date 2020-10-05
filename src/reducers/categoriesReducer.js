import * as types from "../shared/types";

const defaultState = {
  categories: [
    { id: 1, name: "Home" },
    { id: 2, name: "Work" },
  ],
};

export const categoriesReducer = (state = defaultState, action) => {
  console.log('action: ', action, state);
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
        category: state.categories[ind] = action.category,
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
