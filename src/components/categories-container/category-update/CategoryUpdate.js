import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import allActions from "../../../actions";
import * as types from "../../../shared/types";
import { Button } from "semantic-ui-react";

const CategoryUpdate = () => {
  const isCancelled = useRef(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [actionsState, setActionsState] = useState(types.actionsMapping);

  const updateToolbarActions = () => {
    dispatch(allActions.toolbarActions.updateActionsStatus(actionsState));
  };

  const handleClick = () => {
    setActionsState(types.actionsMapping);
    dispatch(allActions.titleActions.updateTitleView("Categories List"));
    history.push("./");
  }

  useEffect(() => {
    !isCancelled.current &&
      setActionsState({
        CREATE: true,
        READ: true,
        UPDATE: false,
        DELETE: true,
      });
    updateToolbarActions();
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionsState]);

  return (
    <div>
      <div>Update Category</div>
      <Button color="green" onClick={handleClick}>
        Done
      </Button>
    </div>
  );
};

export default CategoryUpdate;
