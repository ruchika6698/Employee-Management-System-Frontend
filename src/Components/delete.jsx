import React from "react";
import empService from '../Services/EmployeeService'
let service = new empService()


export class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      ID:''
    }
  }
  handleChange= (e)=> { 
    console.log(e.target.value);
     
    this.setState({[e.target.name]:e.target.value});  
    console.log(this.state);
    
  }  
  delete=(e) => {
    e.preventDefault();
    console.log(this.state);
    let requestData ={
      ID:this.state.ID
    }
    service.delete(requestData).then((data)=>{
      console.log(" delete data Successfully ", data);
    }).catch((err)=>{
      console.log(err);
      
    })
  } 

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Delete</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="City">ID</label>
              <input type="text" name="ID" onChange={this.handleChange} value={this.state.ID} placeholder="Employee ID" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" onClick={this.delete} className="btn">
            Delete Details
          </button>
        </div>
      </div>
    );
  }
}