import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button } from "semantic-ui-react";
import { useNextLocationId } from "../../../shared/hooks/use-selectors";
import allActions from "../../../actions";
import * as types from "../../../shared/types";
import "./location-add.scss";

const LocationAdd = ({ categoryId }) => {
  const isCancelled = useRef(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const nextLocationId = useNextLocationId();
  const [actionsState, setActionsState] = useState(types.actionsMapping);
  const [locationName, setLocationName] = useState();
  const [address, setAddress] = useState();
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

  const updateToolbarActions = () => {
    dispatch(allActions.toolbarActions.updateActionsStatus(actionsState));
  };

  const handleClick = () => {
    setActionsState(types.actionsMapping);
    dispatch(
      allActions.locationsActions.addLocationItem({
        locationId: nextLocationId,
        categoryId: categoryId,
        name: locationName,
        address: address,
        coordinates: coordinates,
      })
    );
    history.push("./");
  };

  const handleTextChange = (event) => {
    const value = event.target.value;
    setLocationName(value);
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
    <div className="category-add-container">
      <div className="category-add-header">
        <h1>New Category</h1>
      </div>
      <Form className="category-add-form" size={"mini"}>
        <Form.Field className="category-add-name">
          <div className="inline field">
            <label className="category-add-label">Name: </label>
            <input
              className="category-add-input"
              placeholder="Category Name"
              onChange={handleTextChange}
              autoFocus
            ></input>
          </div>
        </Form.Field>
        <div className="category-add-button">
          <Button type="submit" color={"green"} onClick={handleClick}>
            Create
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LocationAdd;
