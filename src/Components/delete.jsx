import React from "react";

export class Delete extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className="footer">
          <button type="button" className="btn">
           Delete
          </button>
        </div>
    );
  }
}