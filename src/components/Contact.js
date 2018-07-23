import React, { Component } from "react";
import Navigation from "./Navigation";
import ContactCard from "./ContactCard";
import ImageCard from "./ImageCard";

class Contact extends Component {
  render() {
    return (
      <div>
        <h1 id="title">Contact Page</h1>
        <Navigation />
        <br />
        <br />
        <br />
        <div className="flex-container">
          <ContactCard
            type="Personal"
            email="njk.kaloger@gmail.com"
            number="0422-127-623"
          />
          <ContactCard
            type="Swinburne"
            email="101622489@student.swin.edu.au"
            number="0422-127-623"
          />
          <ContactCard
            type="Work"
            email="nicholas.kaloger@inlight.com"
            number="0422-127-623"
          />
        </div>

        <div className="second-container">
          <ImageCard name="Nicholas Kaloger" image="images/profile.jpg" />
        </div>
      </div>
    );
  }
}

export default Contact;
