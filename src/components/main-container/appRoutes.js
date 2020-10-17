import React from "react";
import { Route, Switch } from "react-router-dom";
import CategoriesMain from "../categories-container/CategoriesMain";
import LocationsMain from "../locations-container/LocationsMain"
import CategoryAdd from "../categories-container/category-add/CategoryAdd";
import CategoryUpdate from "../categories-container/category-update/CategoryUpdate";
import LocationAdd from "../locations-container/location-add/LocationAdd";
import LocationUpdate from "../locations-container/location-update/LocationUpdate";
import NotFoundPage from "../main-container/not-found-page/NotFoundPage";

export default () => (
  <Switch>
    <Route exact path="/" component={CategoriesMain} />
    <Route path="/categories" component={CategoriesMain} />
    <Route path="/locations" component={LocationsMain} />
    <Route path="/add-category" component={CategoryAdd} />
    <Route path="/update-category" component={CategoryUpdate} />
    <Route path="/view-category" component={CategoryUpdate} />
    <Route path="/add-location" component={LocationAdd} />
    <Route path="/update-location" component={LocationUpdate} />
    <Route path="/view-location" component={LocationUpdate} />
    <Route component={NotFoundPage} />
  </Switch>
);
