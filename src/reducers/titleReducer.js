import * as types from "../shared/types";

const defaultState = {
  title: "",
};

export const titleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_TITLE_VIEW:
      return {
        ...state,
        categoryItem: action.categoryItem,
      };
    default:
      return state;
  }
};

export default titleReducer;
