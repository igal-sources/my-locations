import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/main-container/appRoutes";
import "semantic-ui-css/semantic.min.css";
import { Grid } from "semantic-ui-react";
import Header from "./components/main-container/header/Header";
import "./App.scss";

const App = () => {  
  return (
    <BrowserRouter>
      <div className="App-main">
        <div className="App-header">
          <Header />
        </div>
        <Grid>          
          <Grid.Column className="App-content" width={14}>
            <Routes />
          </Grid.Column>
        </Grid>        
      </div>
    </BrowserRouter>
  );
};

export default App;
