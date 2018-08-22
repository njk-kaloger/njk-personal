import React, { Component } from "react";
import Navigation from "./navigation";
import Footer from "./footer";
import Login from "./login";

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
