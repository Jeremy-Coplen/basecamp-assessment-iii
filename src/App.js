import React, { Component } from 'react';
import logo from './logo.svg';
import kh from './kh.gif';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My First React App</h1>
        </header>
        <p className="App-intro">
          I'm not sure what to put here so I'll just show you a gif of my favorite up coming game.
        </p>
        <div className="Gif">
          <img src={kh} className="Kh-gif" alt="Kh" />
          <p className="Gif-source">
            This gif was gotten from giphy.com
          </p>
        </div>
        <p className="Footer">
          © Jeremy Coplen
        </p>
      </div>
    );
  }
}

export default App;
