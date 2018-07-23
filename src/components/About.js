import React, { Component } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ImageCard from "./ImageCard";

class About extends Component {
  render() {
    return (
      <div>
        <h1 id="title">About Page</h1>
        <Navigation />
        <h2 id="subtitle">About Me</h2>
        <div className="third-container">
          <ImageCard name="Nicholas Kaloger" image="images/profile.jpg" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
