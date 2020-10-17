import * as types from "../shared/types";

export const fetchAllLocations = (locations) => {
  return {
    type: types.FETCH_LOCATIONS,
    locations,
  };
};

export const addLocationItem = (location) => {
  return {
    type: types.ADD_LOCATION_ITEM,
    location,
  };
};

export const updateLocation = (location) => {
  return {
    type: types.UPDATE_LOCATION,
    location,
  };
};

export const removeLocation = (location) => {
  return {
    type: types.REMOVE_LOCATION,
    location,
  };
};

export default { fetchAllLocations, updateLocation, addLocationItem, removeLocation };
