import React, { Component } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Login from "./Login";
import Timer from "./timer";
import Game from "./tic-tac";

class Example extends Component {
  render() {
    return (
      <div>
        <h1 id="title">Example Page</h1>
        <Login />
        <Navigation />
        <br />
        <br />
        <div className="example-content">
          <Timer />
          <br />
          <Game />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Example;
