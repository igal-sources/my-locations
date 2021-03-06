export const fetchCategories = (callback) => {
  const serializedState = localStorage.getItem("state");
  const store = JSON.parse(serializedState);
  const {
    categoriesReducer: { categories },
  } = store;
  callback(categories);
};

export const getCategoryById = (categoryId, callback) => {
  fetchCategories((categories) =>
    //var { name } = categories.find((c) => c.id === categoryId);
    callback(categories.find((c) => c.id === categoryId))
  );
};
