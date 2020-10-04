import * as types from "../shared/types";

export const updateTitleView = categoryItem => {
  return {
    type: types.UPDATE_TITLE_VIEW,
    categoryItem
  };
};

export default { updateTitleView };
