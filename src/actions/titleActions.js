import * as types from "../shared/types";

export const updateCategoryTitleView = categoryItem => {
  return {
    type: types.UPDATE_CATEGORY_TITLE_VIEW,
    categoryItem
  };
};

export const updateLocationTitleView = locationItem => {
  return {
    type: types.UPDATE_LOCATION_TITLE_VIEW,
    locationItem
  };
};

export default { updateCategoryTitleView, updateLocationTitleView };
