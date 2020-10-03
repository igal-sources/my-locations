import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import allActions from "../../../actions";
//import { useCategories } from "../../../shared/hooks/use-selectors";
import { Table } from "semantic-ui-react";
import CategoryItem from "../category-item/CategoryItem";
import { fetchCategories } from "../../../apis/categoriesService";
import * as types from "../../../shared/types";
import "./category-list.scss";

const CategoryList = () => {
  const dispatch = useDispatch();
  const isCancelled = useRef(false);
  const [Category, setCategories] = useState([]);

  const updateHeader = (actions) => {
    dispatch(allActions.titleActions.updateTitleView("Categories List"));
    dispatch(allActions.toolbarActions.updateActionsStatus(actions));    
    fetchCategories((categories) => {
      console.log('categories11111: ', categories);
      setCategories(categories);
    });
  };

  useEffect(() => {
    let mapping = types.actionsMapping;
    Object.assign(mapping, {
      CREATE: false,
      READ: true,
      UPDATE: true,
      DELETE: true,
    });

    !isCancelled.current && updateHeader(mapping);
    return () => {
      isCancelled.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Category]);

  return (
    <div className="category-list-container">
      <div className="table-scroll">
        <Table singleLine textAlign="left" className="category-list-table">
          <Table.Header className="category-list-table-header">
            <Table.Row active className="category-list-header-rows">
              <Table.HeaderCell textAlign="left">Categories</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {Category &&
              Category.map(({ name }, index) => (
                <Table.Row key={index} className="category-list-table-row">
                  <Table.Cell>
                    <CategoryItem key={index} categoryName={name} />
                  </Table.Cell>
                </Table.Row>
              ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default CategoryList;
