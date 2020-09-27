import { useSelector } from "react-redux";

export const useViewTitle = () => {
  const { title } = useSelector(state => state.titleReducer);
  console.log('useViewTitle: ', title);
  return title;
};

export const useMappingActions = () => {
  const { actions } = useSelector(state => state.toolbarReducer);
  return actions;
};

export const useCategories = () => {
  const { categories } = useSelector(state => state.categoriesReducer);
  console.log('useCategories: ', categories);
  return categories;
};