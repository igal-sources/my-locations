import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import allActions from "../../../actions";
import * as types from "../../../shared/types";
import { Button, Form } from "semantic-ui-react";
import "./category-update.scss";

const CategoryUpdate = (props) => {
  const isCancelled = useRef(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { titleText } = props.location.state;
  const [actionsState, setActionsState] = useState(types.actionsMapping);
  const [newName, setNewName] = useState(titleText);

  const updateToolbarActions = () => {
    dispatch(allActions.toolbarActions.updateActionsStatus(actionsState));
  };

  const handleClick = () => {
    setActionsState(types.actionsMapping);
    dispatch(allActions.titleActions.updateTitleView("Categories List"));
    dispatch(allActions.categoriesActions.updateCategory(newName));
    history.push("./");
  };

  const handleTextChange = (event) => {
    const value = event.target.value;
    setNewName(value);
  };

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
    <div className="category-update-container">
      <div className="category-update-header">
        <h1>Update : {titleText}</h1>
      </div>
      <Form className="category-update-form" size={"mini"}>
        <Form.Field className="category-update-name">
          <div className="inline field">
            <label className="category-update-label">Name: </label>
            <input
              className="category-update-input"
              value={newName}
              placeholder="Category Name"
              onChange={handleTextChange}
              autoFocus
            ></input>
          </div>
        </Form.Field>
        <div className="category-update-button">
          <Button type="submit" color={"green"} onClick={handleClick}>
            Update
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CategoryUpdate;
