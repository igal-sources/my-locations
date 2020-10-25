import * as types from "../shared/types";

const defaultState = {
  locations: [
    {
      locationId: 1,
      categoryId: 1,
      name: "Home location",
      address: "Osichkin 41 Ramat Hasharon",
      coordinates: { latitude: 32.13675, longitude: 34.84104 },
    },
    {
      locationId: 2,
      categoryId: 2,
      name: "Work location",
      address: "HaAlon 4 Kfar Neter Israel",
      coordinates: { latitude: 32.28101, longitude: 34.8753 },
    },
  ],
};

export const locationsReducer = (state = defaultState, action) => {
  console.log('state = defaultState, action: ', state , action);
  switch (action.type) {
    case types.FETCH_LOCATIONS:
      return {
        ...state,
        locations: action.locations,
      };
    case types.ADD_LOCATION_ITEM:
      return {
        ...state,
        locations: [...state.locations, action.location],
      };
    case types.UPDATE_LOCATION:
      const ind = state.locations.findIndex(
        (location) => location.locationId === action.location.locationId
        );
        console.log('action.location: ', action.location);
      return {
        ...state,
        ...(state.locations[ind] = action.location),
      };
    case types.REMOVE_LOCATION:
      return {
        ...state,
        ...state.locations.filter((c) => c.locationId !== action.location.locationId),
      };
    default:
      return state;
  }
};

export default locationsReducer;
