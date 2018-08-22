import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <header>
        <div className="nav-bar">
          <span className="logo">NJK</span>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/examples">Examples</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navigation;
