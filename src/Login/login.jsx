import React from "react";
import loginImg from "../loginlogo.png";

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input type="text" name="Username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input type="Password" name="Password" placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Submit
          </button>
        </div>
      </div>
    );
  }
}