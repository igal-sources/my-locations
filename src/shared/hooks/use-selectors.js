import { useSelector } from "react-redux";

export const useViewTitle = () => {
  const { categoryItem } = useSelector((state) => state.titleReducer);
  return categoryItem;
};

export const useSelectedCategory = (id) => {
  const category = useSelector((state) => state.titleReducer);
  return category;
};

export const useMappingActions = () => {
  const { actions } = useSelector((state) => state.toolbarReducer);
  return actions;
};

export const useCategories = () => {
  const { categories } = useSelector((state) => state.categoriesReducer);
  return categories;
};

export const useNextCategoryId = () => {
  const { categories } = useSelector((state) => state.categoriesReducer);
  let max = 0;
  categories.forEach((cat) => {
    if (cat.id > max) {
      max = cat.id;
    }
  });
  return max + 1;
};

export const useNextLocationId = () => {
  const { locations } = useSelector((state) => state.locationsReducer);
  let max = 0;
  locations.forEach((location) => {
    if (location.locationId > max) {
      max = location.locationId;
    }
  });
  return max + 1;
};
