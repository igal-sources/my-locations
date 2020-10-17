import React from "react";
import { useDispatch } from "react-redux";
import allActions from "../../../actions";
import "./location-item.scss";

const LocationItem = ({ locationItem }) => {
  const dispatch = useDispatch();

  const { name } = locationItem;

  const handleLocationItemClick = () => {
    dispatch(allActions.titleActions.updateLocationTitleView(locationItem));
    dispatch(
      allActions.toolbarActions.updateActionsStatus({
        CREATE: true,
        READ: false,
        UPDATE: false,
        DELETE: false,
      })
    );
  };

  return (
    <div className="location-item-container" onClick={handleLocationItemClick}>
      <h3 className="location-item-title">{name}</h3>
    </div>
  );
};

export default LocationItem;
