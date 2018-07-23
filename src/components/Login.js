import React, { Component } from "react";

class Login extends Component {
  divRef = React.createRef();
  clickForm = event => {
    const modal = this.divRef;

    // When the user clicks anywhere outside of the modal, close it
    if (event.target.className === "login") {
      modal.current.style.display = "block";
    }

    if (event.target.className === "close") {
      modal.current.style.display = "none";
    }

    if (event.target.className === "cancelbtn") {
      modal.current.style.display = "none";
    }
  };

  render() {
    return (
      <div>
        <button className="login" onClick={this.clickForm}>
          Login
        </button>

        <div ref={this.divRef} id="id01" className="modal">
          <span onClick={this.clickForm} className="close" title="Close Modal">
            &times;
          </span>

          <form className="modal-content animate" action="/action_page.php">
            <div className="imgcontainer">
              <img
                src="images/img_avatar.png"
                alt="Avatar"
                className="avatar"
              />
            </div>

            <div className="holder">
              <label htmlFor="uname">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

              <button type="submit">Login</button>
              <label>
                <input type="checkbox" name="remember" defaultChecked />{" "}
                Remember me
              </label>
            </div>

            <div className="holder" backgroundcolor="#f1f1f1">
              <button
                onClick={this.clickForm}
                type="button"
                className="cancelbtn"
              >
                Cancel
              </button>
              <span className="psw">
                Forgot <a href="#">password?</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
