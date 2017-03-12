import React, {Component} from 'react';

import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

class Navbar extends Component {
  render() {
    var styles = {
      appBar: {
        flexWrap: 'wrap'
      },
      tabs: {
        width: '100%'
      }
    }
    return (
      <div className="nav-bar">
        <AppBar showMenuIconButton={false} style={styles.appBar} >
          <Tabs style={styles.tabs} value={0} initialSelectedIndex={0}>
            <Tab label='Home' value={0}/>
          </Tabs>
        </AppBar>
      </div>
    );
  }
}


export default Navbar;
