import React, { Component } from "react";

class ContactCard extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.type}</h2>
        <ul className="contact-card-point">
          <li>
            <em>email: </em> {this.props.email}
          </li>
          <li>
            <em>number: </em> {this.props.number}
          </li>
        </ul>
      </div>
    );
  }
}

export default ContactCard;
