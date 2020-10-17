import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoriesMain from "../categories-container/CategoriesMain";
import LocationsMain from "../locations-container/LocationsMain"
import CategoryAdd from "../categories-container/category-add/CategoryAdd";
import CategoryUpdate from "../categories-container/category-update/CategoryUpdate";
import CategoryList from "../categories-container/category-list/CategoryList";
import LocationList from "../locations-container/location-list/LocationList";
import NotFoundPage from "../main-container/not-found-page/NotFoundPage";

export default () => (
  <Switch>
    <Route exact path="/" component={CategoriesMain} />
    <Route path="/categories" component={CategoriesMain} />
    <Route path="/locations" component={LocationsMain} />
    <Route path="/add-category" component={CategoryAdd} />
    <Route path="/update-category" component={CategoryUpdate} />
    <Route path="/view-category" component={CategoryUpdate} />
    <Route component={NotFoundPage} />
  </Switch>
);
