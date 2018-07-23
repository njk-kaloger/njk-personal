import React, { Component } from "react";
import Navigation from "./Navigation";
import { Fade } from "react-slideshow-image";

const images = ["images/mussels.jpg"];
const Slideshow = () => {
  console.log(this);
  return <Fade images={images} duration={5000} transitionDuration={1000} />;
};

class Example extends Component {
  render() {
    return (
      <div>
        <h1 id="title">Example Page</h1>
        <Navigation />
      </div>
    );
  }
}

export default Example;
