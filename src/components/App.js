import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

import Form from '../containers/form'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Form />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
