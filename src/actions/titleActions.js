import * as types from "../shared/types";

export const updateTitleView = title => {
  return {
    type: types.UPDATE_TITLE_VIEW,
    title
  };
};

export default { updateTitleView };
