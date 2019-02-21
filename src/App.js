import React, { Component } from 'react';
import Card from './components/Card';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Contacts React App
          </h1>
        </header>
        <footer>
          <Card classes={["footer"]}>
            <span>
              made by <a href="https://github.com/dmorais92">David Morais</a> for CarTrack
            </span>
          </Card>
        </footer>
      </div>
    );
  }
}

export default App;
