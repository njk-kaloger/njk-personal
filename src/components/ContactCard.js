import React, { Component } from "react";

class ContactCard extends Component {
  constructor(props) {
    super(props);
    this.mail = "mailto:" + this.props.email;
  }

  render() {
    return (
      <div className="card-details">
        <h2>{this.props.type}</h2>
        <ul className="contact-card-point">
          <li>
            <em>email: </em> <a href={this.mail}>{this.props.email}</a>
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
