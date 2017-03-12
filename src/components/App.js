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
const PROD_HOST = '';

const socket = io.connect(DEV_HOST);

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    socket.emit('init');
    socket.on('welcome', data => {
      console.log(data);
    });
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <NavBar />
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
