import React, { Component } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="title">NJK-Web</h1>
        <div>
          <Login />
          <Navigation />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
