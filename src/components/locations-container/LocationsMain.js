import React from "react";
import { Grid } from "semantic-ui-react";
import LocationHeader from "./location-header/LocationHeader";
import LocationList from "./location-list/LocationList";

const LocationsMain = () => {  
  return (
      <div className="locations-main-container">
        <div className="locations-main-header">
          <LocationHeader />
        </div>
        <Grid>          
          <Grid.Column className="locations-main-content" width={16}>
            <LocationList />
          </Grid.Column>
        </Grid>        
      </div>
  );
};

export default LocationsMain;