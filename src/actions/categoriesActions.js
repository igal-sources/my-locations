import * as types from "../shared/types";

export const fetchCategories = (categories) => {
  return {
    type: types.FETCH_CATEGORIES,
    categories,
  };
};

export const addCategoryItem = (category) => {
  return {
    type: types.ADD_CATEGORY_ITEM,
    category,
  };
};

export const updateCategoryName = (name) => {
  return {
    type: types.UPDATE_CATEGORY,
    name,
  };
};

export default { fetchCategories, updateCategoryName, addCategoryItem };
