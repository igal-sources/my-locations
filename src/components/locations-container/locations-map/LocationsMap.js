import React from "react";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const LocationsMap = () => {

  const GoogleMapExample = withGoogleMap((props) => (
    <GoogleMap defaultCenter={{ lat: 32.13675, lng: 34.84104 }} defaultZoom={15}>
      <Marker position={{ lat: 32.13675, lng: 34.84104 }} />
    </GoogleMap>
  ));

  return (
    <div>
      <div>MAP</div>
      <GoogleMapExample
        containerElement={<div style={{ height: "700px", width: "900px" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default LocationsMap;
