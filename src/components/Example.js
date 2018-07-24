import React, { Component } from "react";
import Navigation from "./Navigation";
import { Fade } from "react-slideshow-image";
import Footer from "./Footer";
import Login from "./Login";

class Example extends Component {
  render() {
    return (
      <div>
        <h1 id="title">Example Page</h1>
        <Login />
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default Example;
