import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchCategories } from "../../../apis/categoriesService";
import { useNextLocationId } from "../../../shared/hooks/use-selectors";
import Geocode from "react-geocode";
import allActions from "../../../actions";
import * as types from "../../../shared/types";
import { Button, Form, Dropdown } from "semantic-ui-react";
import "./location-add.scss";

const LocationAdd = () => {
  const isCancelled = useRef(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const nextID = useNextLocationId();
  const [actionsState, setActionsState] = useState(types.actionsMapping);
  const [locationAddress, setAddress] = useState();
  const [locationLatitude, setLocationLatitude] = useState();
  const [locationLongitude, setLocationLongitude] = useState();
  const [newName, setNewName] = useState();
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [captionsText, setCaptionsText] = useState({ header: "", buttonText: "" });

  const updateToolbarActions = () => {
    dispatch(allActions.toolbarActions.updateActionsStatus(actionsState));
  };

  const handleClick = () => {
    setActionsState(types.actionsMapping);
    dispatch(allActions.titleActions.updateLocationTitleView({ name: types.constants.Locations }));
    dispatch(
      allActions.locationsActions.addLocationItem({
        locationId: nextID,
        categoryId: selectedCategoryId,
        name: newName,
        address: locationAddress,
        coordinates: { latitude: locationLatitude, longitude: locationLongitude },
      })
    );
    history.push("./locations");
  };

  const handleSelectedCategory = ((event, data) => {
    const { value } = data;
    const { key } = data.options.find(o => o.value === value);
    setSelectedCategoryId(key);
  })

  const handleUpdateCoordinates = () => {
    Geocode.setApiKey("AIzaSyCTZiYLek_3UQqCNum8BK5phfUJsMFjN5k");
    Geocode.setLanguage("en");
    Geocode.setRegion("il");

    // Enable or disable logs. Its optional.
    Geocode.enableDebug();

    locationAddress && Geocode.fromAddress(locationAddress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLocationLatitude(lat);
        setLocationLongitude(lng);
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

      fetchCategories((categories) => {
        const stateOptions = categories.map((state) => {
          return {
            key: state.id,
            text: state.name,
            value: state.name
          }
        })
        setCategories(stateOptions);
      });
    updateToolbarActions();
    setCaptionsText({
      header: "New Location",
      buttonText: "Add",
    });
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionsState]);

  return (
    <div className="location-add-container">
      <div className="location-add-header">
        <h1>{header}</h1>
      </div>
      <Form className="location-add-form" size={"mini"}>
      <Form.Field className="location-add-categories">
      <label className="location-add-label">Category</label>
      <Dropdown className="location-add-dropdown" placeholder='categories' search selection options={categories} 
      onChange={handleSelectedCategory}/>
      </Form.Field>
        <Form.Field className="location-add-name">
          <label className="location-add-label">Name</label>
          <input
            className="location-add-input"
            value={newName}
            placeholder="Location Name"
            onChange={(e) => setNewName(e.target.value)}
            autoFocus
          ></input>
        </Form.Field>
        <Form.Field className="location-add-name">
          <label className="location-add-label">Address</label>
          <input
            className="location-add-input"
            value={locationAddress}
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
            autoFocus
          ></input>
          <Button
            className="location-add-address"
            content="Update coordinates"
            onClick={handleUpdateCoordinates}
          />
        </Form.Field>
        <div className="location-add-coordinates">
          <div className="location-add-label">Coordinates</div>
          <Form.Field className="location-add-name">
            <label className="location-add-label">latitude</label>
            <input
              className="location-add-input"
              value={locationLatitude}
              disabled={true}
              placeholder="latitude"
              autoFocus
            ></input>
          </Form.Field>
          <Form.Field className="location-add-name">
            <label className="location-add-label">longitude</label>
            <input
              className="location-add-input"
              value={locationLongitude}
              disabled={true}
              placeholder="longitude"
              autoFocus
            ></input>
          </Form.Field>
        </div>
        <div className="location-add-button">
          <Button type="submit" color={"green"} onClick={handleClick}>
            {buttonText}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default LocationAdd;
