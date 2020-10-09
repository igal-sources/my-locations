import * as types from "../shared/types";

export const fetchAllCategories = (categories) => {
  return {
    type: types.FETCH_CATEGORIES,
    categories,
  };
};

export const addCategoryItem = (category) => {
  return {
    type: types.ADD_CATEGORY_ITEM,
    category
  };
};

export const updateCategory = (category) => {
  return {
    type: types.UPDATE_CATEGORY,
    category,
  };
};

export const removeCategory = (category) => {
  return {
    type: types.REMOVE_CATEGORY,
    category,
  };
};

export default { fetchAllCategories, updateCategory, addCategoryItem, removeCategory };
