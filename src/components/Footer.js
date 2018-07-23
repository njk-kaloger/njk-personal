import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            N<span>JK</span>
          </h3>

          <p className="footer-links">
            <a href="/">Home</a>
            &nbsp;·&nbsp;
            <a href="/about">About</a>
            &nbsp;·&nbsp;
            <a href="/contact">Contact</a>
            &nbsp;·&nbsp;
            <a href="/examples">Examples</a>
          </p>

          <p className="footer-company-name">NJK &copy; 2018</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker" />
            <p>
              <span>839 Toorak Road</span> Melbourne, Australia
            </p>
          </div>

          <div>
            <i className="fa fa-phone" />
            <p>0422 127 623</p>
          </div>

          <div>
            <i className="fa fa-envelope" />
            <p>
              <a href="mailto:njk.kaloger@gmail.com">njk.kaloger@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="https://facebook.com/">
              <i className="fa fa-facebook" />
            </a>
            <a href="https://twitter.com/">
              <i className="fa fa-twitter" />
            </a>
            <a href="https://linkedin.com/">
              <i className="fa fa-linkedin" />
            </a>
            <a href="https://github.com/">
              <i className="fa fa-github" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
