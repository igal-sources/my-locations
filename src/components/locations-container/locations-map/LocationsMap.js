import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const LocationsMap = (props) => {
  //const { locationId, categoryId, name, address, coordinates , readOnly } = props.location.state;
  const {
    coordinates: { latitude, longitude },
  } = props.location.state;

  console.log("props.location.state: ", props.location.state);
  //key: AIzaSyCUcKKB0ID7wEwe2sg87xTxvLTT4IBevQc
  const mapStyles = {
    height: "90vh",
    width: "90%",
  };

  const defaultCenter = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCUcKKB0ID7wEwe2sg87xTxvLTT4IBevQc">
      <GoogleMap mapContainerStyle={mapStyles} zoom={18} center={defaultCenter}>
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default LocationsMap;
