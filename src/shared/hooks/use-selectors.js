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