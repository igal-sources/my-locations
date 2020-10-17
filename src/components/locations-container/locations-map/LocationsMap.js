import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const LocationsMap = () => {

  const GoogleMapExample = withGoogleMap((props) => (
    <GoogleMap defaultCenter={{ lat: 32.13675, lng: 34.84104 }} defaultZoom={13}></GoogleMap>
  ));

  console.log("LocationsMap: ");
  return (
    <div>
      <GoogleMapExample
        containerElement={<div style={{ height: `500px`, width: "500px" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default LocationsMap;
