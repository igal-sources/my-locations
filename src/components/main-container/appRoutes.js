import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoryList from "../categories-container/category-list/CategoryList";
import CategoryAdd from "../categories-container/category-add/CategoryAdd";
import CategoryUpdate from "../categories-container/category-update/CategoryUpdate";
import NotFoundPage from "../main-container/not-found-page/NotFoundPage";

export default () => (
  <Switch>
    <Route exact path="/" component={CategoryList} />    
    <Route path="/add-category" component={CategoryAdd} />    
    <Route path="/update-category" component={CategoryUpdate} />    
    <Route component={NotFoundPage} />
  </Switch>
);
