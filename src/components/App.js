import React, { Component } from "react";
import Navigation from "./Navigation";

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="title">NJK-Web</h1>
        <div>
          <Navigation />
        </div>
      </div>
    );
  }
}

export default App;
