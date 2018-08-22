import React, { Component } from "react";
import Navigation from "../navigation";
import Footer from "../footer";
import Login from "../login";
import Timer from "../timer";
import Game from "../tic-tac";

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
