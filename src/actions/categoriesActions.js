import * as types from "../shared/types";

export const fetchCategories = categories => {
  return {
    type: types.FETCH_CATEGORIES,
    categories
  };
};

export default { fetchCategories };
