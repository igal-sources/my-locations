import * as types from "../shared/types";

export const fetchAllCategories = (categories) => {
  return {
    type: types.FETCH_CATEGORIES,
    categories,
  };
};

export const addCategoryItem = (name) => {
  return {
    type: types.ADD_CATEGORY_ITEM,
    name,
  };
};

export const updateCategory = (name) => {
  return {
    type: types.UPDATE_CATEGORY,
    name,
  };
};

export const removeCategory = (name) => {
  return {
    type: types.REMOVE_CATEGORY,
    name,
  };
};

export default { fetchAllCategories, updateCategory, addCategoryItem, removeCategory };
