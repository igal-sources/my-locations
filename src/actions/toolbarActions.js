import * as types from "../shared/types";

export const updateActionsStatus = actions => {
  return {
    type: types.UPDATE_ACTIONS_STATUS,
    actions
  };
};

export default { updateActionsStatus };
