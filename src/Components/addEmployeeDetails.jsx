import React from "react";
import loginImg from "../loginlogo.png";

export class AddEmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">AddEmployeeDetails</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="EmployeeName">EmployeeName</label>
              <input type="text" name="EmployeeName" placeholder="Employee Name" />
            </div>
            <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input type="text" name="Username" placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="Gender">Gender</label>
              <input type="text" name="Gender" placeholder="Gender" />
            </div>
            <div className="form-group">
              <label htmlFor="City">City</label>
              <input type="text" name="City" placeholder="City" />
            </div>
            <div className="form-group">
              <label htmlFor="EmailID">EmailID</label>
              <input type="text" name="EmailID" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <label htmlFor="Designation">Designation</label>
              <input type="text" name="Designation" placeholder="Designation" />
            </div>
            <div className="form-group">
              <label htmlFor="WorkingExperience">WorkingExperience</label>
              <input type="text" name="WorkingExperience" placeholder="Working Experience" />
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