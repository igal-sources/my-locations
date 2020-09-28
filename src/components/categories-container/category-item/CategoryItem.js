import React from "react";
import { useDispatch } from "react-redux";
import allActions from "../../../actions";
import "./category-item.scss";

const CategoryItem = ({ categoryName }) => {
  const dispatch = useDispatch();

  const handleCategoryItemClick = (name) => {
    dispatch(allActions.titleActions.updateTitleView(name));
    dispatch(allActions.toolbarActions.updateActionsStatus({
      CREATE: true,
      READ: false,
      UPDATE: false,
      DELETE: false,
    }));
  };

  return (
    <div className="category-item-container" onClick={(e) => handleCategoryItemClick(categoryName)}>
        <h3 className="category-item-title">{categoryName}</h3>
    </div>
  );
};

export default CategoryItem;
