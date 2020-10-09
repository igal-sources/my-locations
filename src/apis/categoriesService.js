export const fetchCategories = (callback) => {
  const serializedState = localStorage.getItem("state");
  const store = JSON.parse(serializedState)
  const {
    categoriesReducer: {
      categories,
    },
  } = store;
  callback(categories);
};
