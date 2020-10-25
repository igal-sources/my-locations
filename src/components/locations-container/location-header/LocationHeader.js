import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useLocationViewTitle, useMappingActions } from "../../../shared/hooks/use-selectors";
import LocationConfirmRemove from "../../locations-container/location-remove/LocationConfirmRemove";
import * as types from "../../../shared/types";
import "./location-header.scss";

const LocationHeader = () => {
  const isCancelled = useRef(false);
  const actionsStatus = useMappingActions();
  const locationItem = useLocationViewTitle();
  const [headerTitle, setHeaderTitle] = useState();
  const [modalOpen, setModalOpen] = useState(false);

  const handleDeleteAction = () => {
    setModalOpen(true);
  };

  const createActionLinkClassName = classNames({
    "location-header-link": true,
    "location-header-disabled-link": actionsStatus && actionsStatus[types.toolbarAction.CREATE],
  });
  const readActionLinkClassName = classNames({
    "location-header-link": true,
    "location-header-disabled-link": actionsStatus && actionsStatus[types.toolbarAction.READ],
  });
  const updateActionLinkClassName = classNames({
    "location-header-link": true,
    "location-header-disabled-link": actionsStatus && actionsStatus[types.toolbarAction.UPDATE],
  });
  const deleteActionLinkClassName = classNames({
    "location-header-link": true,
    "location-header-disabled-link": actionsStatus && actionsStatus[types.toolbarAction.DELETE],
  });

  useEffect(() => {
    !isCancelled.current && setModalOpen(false);
    setHeaderTitle(locationItem && locationItem.name);
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locationItem && locationItem.name]);

  return (
    <div className="location-header-container">
      <div className="location-header-title">
        <h2>{headerTitle}</h2>
      </div>
      <Link
        to="/add-location"
        onClick={() => setHeaderTitle(types.constants.NewLocation)}
        className={createActionLinkClassName}
      >
        CREATE
      </Link>
      <Link
        to={{ pathname: "/view-location", state: { locationItem, readOnly: true } }}
        className={readActionLinkClassName}
      >
        VIEW
      </Link>
      <Link
        to={{ pathname: "/update-location", state: { locationItem, readOnly: false } }}
        className={updateActionLinkClassName}
      >
        UPDATE
      </Link>
      <Link to="/locations" onClick={handleDeleteAction} className={deleteActionLinkClassName}>
        DELETE
      </Link>
      <LocationConfirmRemove locationItem={locationItem} modalOpen={modalOpen} />
    </div>
  );
};

export default LocationHeader;
