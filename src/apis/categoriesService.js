export const fetchCategories = (callback) => {
  const serializedState = localStorage.getItem("state");
  const store = JSON.parse(serializedState)
  const {
    categoriesReducer: {
      categories,
    },
  } = store;
  console.log("STATE: ", categories);
  callback(categories);
};
