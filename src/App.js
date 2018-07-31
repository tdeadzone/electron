import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const electron = window.require('electron');
const { ipcRenderer } = electron;
const { app, fs, process } = electron.remote;
// const process = electron.remote.require('process');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <span>node version: { process.versions.node }</span>
          <br/>
          <span>chrome version: { process.versions.chrome }</span>
          <br/>
          <span>electron version: { process.versions.electron }</span>
        </p>
      </div>
    );
  }
}

export default App;
