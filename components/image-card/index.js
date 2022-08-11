import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    return (
      <div className="container">
        <img src={this.props.image} alt="Profile" className="image" />
        <div className="overlay">Name: {this.props.name}</div>
      </div>
    );
  }
}

export default ImageCard;
