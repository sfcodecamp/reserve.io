import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RestaurantCard from './card';
import './App.css';

import NavBar from './navbar';
import Form from '../containers/form'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <h1 className="center">Welcome to Reserve!</h1>
          <div className="container">
            <Form />
            <div className="cards">
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
