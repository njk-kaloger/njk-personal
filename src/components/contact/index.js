import React, { Component } from "react";
import Navigation from "../navigation";
import ContactCard from "../contact-card";
import ImageCard from "../image-card";
import Footer from "../footer";
import Login from "../login";

class Contact extends Component {
  render() {
    return (
      <div>
        <h1 id="title">Contact Page</h1>
        <Login />
        <Navigation />
        <br />
        <br />
        <br />
        <div className="main">
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
              type="Inlight"
              email="nicholas.kaloger@inlight.com"
              number="0422-127-623"
            />
          </div>

          <div className="second-container">
            <ImageCard name="Nicholas Kaloger" image="images/profile.jpg" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
