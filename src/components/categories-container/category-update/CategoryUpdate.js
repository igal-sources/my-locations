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
  const { categoryItem, readOnly } = props.location.state;
  const [actionsState, setActionsState] = useState(types.actionsMapping);
  const [newName, setNewName] = useState();
  const [captionsText, setCaptionsText] = useState({ header: "", buttonText: "" });

  const { id = null, name = "" } = categoryItem && categoryItem;

  const updateToolbarActions = () => {
    dispatch(allActions.toolbarActions.updateActionsStatus(actionsState));
  };

  const handleClick = () => {
    setActionsState(types.actionsMapping);
    dispatch(allActions.titleActions.updateCategoryTitleView({ name: types.constants.Categories }));
    dispatch(allActions.categoriesActions.updateCategory({ id: id, name: newName }));
    history.push("./");
  };

  const handleTextChange = (event) => {
    const value = event.target.value;
    setNewName(value);
  };

  const { header, buttonText } = captionsText;

  useEffect(() => {
    !isCancelled.current &&
      setActionsState({
        CREATE: true,
        READ: true,
        UPDATE: false,
        DELETE: true,
      });
    setNewName(name);
    updateToolbarActions();
    setCaptionsText({
      header: readOnly ? "View" : "Update",
      buttonText: readOnly ? "Done" : "Update",
    });
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionsState]);

  return (
    <div className="category-update-container">
      <div className="category-update-header">
        <h1>
          {header} : {newName}
        </h1>
      </div>
      <Form className="category-update-form" size={"mini"}>
        <Form.Field className="category-update-name">
          <div className="inline field">
            <label className="category-update-label">Name: </label>
            <input
              className="category-update-input"
              value={newName}
              disabled={readOnly}
              placeholder="Category Name"
              onChange={handleTextChange}
              autoFocus
            ></input>
          </div>
        </Form.Field>
        <div className="category-update-button">
          <Button type="submit" color={"green"} onClick={handleClick}>
            {buttonText}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CategoryUpdate;
