import React from "react";
import { Grid } from "semantic-ui-react";
import CategoryHeader from "./category-header/CategoryHeader";
import CategoryList from "./category-list/CategoryList";
import "./categories-main.scss"

const CategoriesMain = () => {  
  return (
      <div className="categories-main-container">
        <div className="categories-main-header">
          <CategoryHeader />
        </div>
        <Grid>          
          <Grid.Column className="categories-main-content" width={16}>
            <CategoryList />
          </Grid.Column>
        </Grid>        
      </div>
  );
};

export default CategoriesMain;