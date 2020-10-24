import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Geocode from "react-geocode";
import allActions from "../../../actions";
import * as types from "../../../shared/types";
import { Button, Form } from "semantic-ui-react";
import "./location-update.scss";

const LocationUpdate = (props) => {
  const isCancelled = useRef(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const { locationItem, readOnly } = props.location.state;
  const [actionsState, setActionsState] = useState(types.actionsMapping);
  const [locationAddress, setAddress] = useState();
  const [locationLatitude, setLocationLatitude] = useState();
  const [locationLongitude, setLocationLongitude] = useState();
  const [newName, setNewName] = useState();
  const [captionsText, setCaptionsText] = useState({ header: "", buttonText: "" });
  //console.log("locationItem: ", locationItem);

  const {
    id = null,
    name = "",
    address,
    coordinates: { latitude, longitude },
  } = locationItem && locationItem;

  const updateToolbarActions = () => {
    dispatch(allActions.toolbarActions.updateActionsStatus(actionsState));
  };

  const handleClick = () => {
    setActionsState(types.actionsMapping);
    dispatch(allActions.titleActions.updateLocationTitleView({ name: types.constants.Locations }));
    dispatch(allActions.locationsActions.updateLocation({ id: id, name: newName }));
    history.push("./locations");
  };

  const handleUpdateCoordinates = () => {
    Geocode.setApiKey("AIzaSyCTZiYLek_3UQqCNum8BK5phfUJsMFjN5k");
    Geocode.setLanguage("en");
    Geocode.setRegion("il");

    // Enable or disable logs. Its optional.
    Geocode.enableDebug();

    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLocationLatitude(lat);
        setLocationLongitude(lng);
        console.log("Geocode.fromAddress: ", lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
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
    setAddress(address);
    setLocationLatitude(latitude);
    setLocationLongitude(longitude);
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
    <div className="location-update-container">
      <div className="location-update-header">
        <h1>
          {header} : {newName}
        </h1>
      </div>
      <Form className="location-update-form" size={"mini"}>
        <Form.Field className="location-update-name">
          <label className="location-update-label">Name</label>
          <input
            className="location-update-input"
            value={newName}
            disabled={readOnly}
            placeholder="Location Name"
            onChange={(e) => setNewName(e.target.value)}
            autoFocus
          ></input>
        </Form.Field>
        <Form.Field className="location-update-name">
          <label className="location-update-label">Address</label>
          <input
            className="location-update-input"
            value={locationAddress}
            disabled={readOnly}
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            autoFocus
          ></input>
          <Button
            className="location-update-address"
            content="Update coordinates"
            onClick={handleUpdateCoordinates}
          />
        </Form.Field>
        <div className="location-update-coordinates">
          <div className="location-update-label">Coordinates</div>
          <Form.Field className="location-update-name">
            <label className="location-update-label">latitude</label>
            <input
              className="location-update-input"
              value={locationLatitude}
              disabled={readOnly}
              placeholder="latitude"
              autoFocus
            ></input>
          </Form.Field>
          <Form.Field className="location-update-name">
            <label className="location-update-label">longitude</label>
            <input
              className="location-update-input"
              value={locationLongitude}
              disabled={readOnly}
              placeholder="longitude"
              autoFocus
            ></input>
          </Form.Field>
        </div>
        <div className="location-update-button">
          <Button type="submit" color={"green"} onClick={handleClick}>
            {buttonText}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LocationUpdate;
