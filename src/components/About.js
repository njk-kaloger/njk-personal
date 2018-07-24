import React, { Component } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ImageCard from "./ImageCard";
import Login from "./Login";

class About extends Component {
  render() {
    return (
      <div>
        <h1 id="title">About Page</h1>
        <Login />
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
