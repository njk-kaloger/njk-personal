import React, { Component } from "react";
import Navigation from "../navigation";
import Footer from "../footer";
import ImageCard from "../image-card";
import Login from "../login";

class About extends Component {
  render() {
    return (
      <div>
        <h1 id="title">About Page</h1>
        <Login />
        <Navigation />
        <h2 id="subtitle">About Me</h2>
        <div className="third-container">
          <ImageCard
            name="Nicholas Kaloger"
            image="assets/images/profile.jpg"
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
