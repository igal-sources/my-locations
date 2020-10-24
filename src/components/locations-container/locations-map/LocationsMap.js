import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const LocationsMap = () => {
  //key: AIzaSyCUcKKB0ID7wEwe2sg87xTxvLTT4IBevQc
  const mapStyles = {
    height: "90vh",
    width: "90%",
  };

  const defaultCenter = {
    lat: 32.13675,
    lng: 34.84104,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCUcKKB0ID7wEwe2sg87xTxvLTT4IBevQc">
      <GoogleMap mapContainerStyle={mapStyles} zoom={18} center={defaultCenter}>
        <Marker position={{ lat: 32.13675, lng: 34.84104 }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default LocationsMap;
