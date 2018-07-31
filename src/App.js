import React, { Component } from 'react';
import '../node_modules/bulma/css/bulma.css';

// Components
import MenuBar from './components/MenuBar';

const electron = window.require('electron');
const { ipcRenderer } = electron;
const { app, fs, process } = electron.remote;
// const process = electron.remote.require('process');

class App extends Component {
  render() {
    return (
      <div class="container">
        <MenuBar/>
      </div>
    );
  }
}

export default App;
