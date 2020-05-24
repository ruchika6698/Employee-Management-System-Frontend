import React from "react";

export class Update extends React.Component {
  constructor(props) {
    super(props);
  }
 render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Update</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="City">City</label>
              <input type="text" name="City" placeholder="City" />
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
            Update Details
          </button>
        </div>
      </div>
    );
  }
}