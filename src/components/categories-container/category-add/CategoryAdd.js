import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import allActions from "../../../actions";
import * as types from "../../../shared/types";

const CategoryAdd = () => {
  const isCancelled = useRef(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [actionsState, setActionsState] = useState(types.actionsMapping);

  const updateToolbarActions = () => {
    dispatch(allActions.toolbarActions.updateActionsStatus(actionsState));
  };
  const handleClick = () => {
    setActionsState(types.actionsMapping);
    history.push("./");
  };

  useEffect(() => {
    Object.assign(types.actionsMapping, {
      CREATE: false,
      READ: true,
      UPDATE: true,
      DELETE: true,
    });

    !isCancelled.current && updateToolbarActions();
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>Create Category</div>
      <Button color="green" onClick={handleClick}>
        Done
      </Button>
    </div>
  );
};

export default CategoryAdd;
