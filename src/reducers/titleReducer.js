import * as types from "../shared/types";

const defaultState = {
  title: "",
};

export const titleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_CATEGORY_TITLE_VIEW:
      return {
        ...state,
        categoryItem: action.categoryItem,
      };
      case types.UPDATE_LOCATION_TITLE_VIEW:
      return {
        ...state,
        locationItem: action.locationItem,
      };
    default:
      return state;
  }
};

export default titleReducer;
