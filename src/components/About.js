import React, { Component } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

class About extends Component {
  render() {
    return (
      <div>
        <h1 id="title">About Page</h1>
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default About;
