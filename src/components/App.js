import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RestaurantCard from './card';
import './App.css';

import Form from '../containers/form'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '50px'
  },
  cards: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '800px'
  }
}

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.container}>
          <Form />
          <div style={styles.cards}>
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
