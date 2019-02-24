import React, { Component } from "react";
import Card from "./components/common/Card";
import Icon from "./components/common/Icon";
import UserList from "./containers/Users";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Icon size="l" icon="logo" />
          <h1>Contacts React App</h1>
        </header>
        <UserList />
        <footer>
          <Card>
            <span>
              made by{" "}
              <a tabIndex="-1" href="https://github.com/dmorais92">
                David Morais
              </a>{" "}
              for CarTrack
            </span>
          </Card>
        </footer>
      </div>
    );
  }
}

export default App;
