import React, { Component } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <h1 id="title">NJK-Web</h1>
        <div>
          <Navigation />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
