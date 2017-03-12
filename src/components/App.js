import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RestaurantCard from './card';
import './App.css';

import NavBar from './navbar';
import Form from '../containers/form'

// Setup Socket.io:
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
const DEV_HOST = 'http://localhost:8000';
const PROD_HOST = 'https://aqueous-reef-24485.herokuapp.com';

const socket = io.connect(PROD_HOST);

class App extends Component {
  componentDidMount() {
    console.log('calling on: ', PROD_HOST);
    socket.emit('init');
    socket.on('welcome', data => {
      console.log(data);
    });
  }
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
