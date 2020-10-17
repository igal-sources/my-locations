export const fetchLocations = (callback) => {
  const serializedState = localStorage.getItem("state");
  const store = JSON.parse(serializedState)
  const {
    locationsReducer: {
      locations,
    },
  } = store;
  callback(locations);
};
