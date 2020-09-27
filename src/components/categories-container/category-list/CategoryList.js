import React, { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import allActions from "../../../actions"
import { useCategories } from "../../../shared/hooks/use-selectors";
import * as types from "../../../shared/types";
import "./category-list.scss";

const CategoryList = () => {
  const dispatch = useDispatch();
  const isCancelled = useRef(false);
  const categories = useCategories();
  console.log('CategoryList - categories: ', categories);
  const [Categories, setCategories] = useState({ categories: {} });

  const updateHeader = (actions) => {
    console.log('CategoryList - updateHeader: ', actions);
    dispatch(allActions.titleActions.updateTitleView("Categories List"));
    dispatch(allActions.toolbarActions.updateActionsStatus(actions));
    dispatch(allActions.categoriesActions.fetchCategories({categories: [{ name: "My Home" }, { name: "My Work" }]}));
  };

useEffect(() => {
  let mapping = types.actionsMapping;
    Object.assign(mapping, {
      CREATE: false,
      READ: false,
      UPDATE: false,
      DELETE: false,
    });

  !isCancelled.current && updateHeader(mapping);
  return () => {
    isCancelled.current = true;
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return <div className="category-list-main">Hello World!</div>;
};

export default CategoryList;
