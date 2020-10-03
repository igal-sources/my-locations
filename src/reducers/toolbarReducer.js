import * as types from "../shared/types";

const defaultState = {
  CREATE: false,
  READ: false,
  UPDATE: false,
  DELETE: false,
};

export const toolbarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_ACTIONS_STATUS:
      return {
        ...state,
        actions: action.actions,
      };
    default:
      return state;
  }
};

export default toolbarReducer;
