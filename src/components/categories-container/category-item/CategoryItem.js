import React from "react";
import { useDispatch } from "react-redux";
import allActions from "../../../actions";
import "./category-item.scss";

const CategoryItem = ({ categoryItem }) => {
  const dispatch = useDispatch();

  const { name } = categoryItem;

  const handleCategoryItemClick = () => {
    dispatch(allActions.titleActions.updateCategoryTitleView(categoryItem));
    dispatch(
      allActions.toolbarActions.updateActionsStatus({
        CREATE: true,
        READ: false,
        UPDATE: false,
        DELETE: false,
      })
    );
  };

  return (
    <div className="category-item-container" onClick={handleCategoryItemClick}>
      <h3 className="category-item-title">{name}</h3>
    </div>
  );
};

export default CategoryItem;
