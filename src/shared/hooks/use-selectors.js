import { useSelector } from "react-redux";

export const useViewTitle = () => {
  const { title } = useSelector(state => state.titleReducer);
  return title;
};

export const useMappingActions = () => {
  const { actions } = useSelector(state => state.toolbarReducer);
  return actions;
};

export const useCategories = () => {
  const { categories } = useSelector(state => state.categoriesReducer);
  return categories;
};

export const useNextCategoryId = () => {
  const { categories } = useSelector(state => state.categoriesReducer);
  let max = 0;
  categories.forEach((cat) => {
    if (cat.id > max) {
      max = cat.id;
    }
  });
  return max + 1;
};