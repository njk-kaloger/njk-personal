import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="Profile" width="95%" />
        <p>
          <em>Name: </em> {this.props.name}
        </p>
      </div>
    );
  }
}

export default ImageCard;
