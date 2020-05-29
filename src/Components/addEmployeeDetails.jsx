import React from "react";
import loginImg from "../loginlogo.png";
import empService from '../Services/EmployeeService'
let service = new empService()

export class AddEmployeeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      EmployeeName:'',
      Username:'',
      Gender:'',
      City:'',
      EmailID:'',
      Designation:'',
      WorkingExperience:''
    }
  }
  
  handleChange= (e)=> { 
    console.log(e.target.value);
     
    this.setState({[e.target.name]:e.target.value});  
    console.log(this.state);
    
  }  
  addEmployeeDetails=(e) => {
    e.preventDefault();
    console.log(this.state);
    let requestData ={
      EmployeeName:this.state.EmployeeName,
      Username:this.state.Username,
      Gender:this.state.Gender,
      City:this.state.City,
      EmailID:this.state.EmailID,
      Designation:this.state.Designation,
      WorkingExperience:this.state.WorkingExperience
    }
    service.addEmployeeDetails(requestData).then((data)=>{
      this.props.history.push("/dashboard");
      console.log(" Add Employee Details Successfully ", data);
    }).catch((err)=>{
      console.log(err);
      
    })
  }
  render() 
  {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Add Employee</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="EmployeeName">EmployeeName</label>
              <input type="text" name="EmployeeName" onChange={this.handleChange} value={this.state.EmployeeName} placeholder="Enter Employee Name" />
            </div>
            <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input type="text" name="Username" onChange={this.handleChange} value={this.state.Username} placeholder="Enter Username" />
            </div>
            <div className="form-group">
              <label htmlFor="Gender">Gender</label>
              <input type="text" name="Gender" onChange={this.handleChange} value={this.state.Gender} placeholder="Enter Gender" />
            </div>
            <div className="form-group">
              <label htmlFor="City">City</label>
              <input type="text" name="City" onChange={this.handleChange} value={this.state.City} placeholder="Enter City" />
            </div>
            <div className="form-group">
              <label htmlFor="EmailID">EmailID</label>
              <input type="text" name="EmailID" onChange={this.handleChange} value={this.state.EmailID} placeholder="Enter Email Address" />
            </div>
            <div className="form-group">
              <label htmlFor="Designation">Designation</label>
              <input type="text" name="Designation" onChange={this.handleChange} value={this.state.Designation} placeholder="Designation" />
            </div>
            <div className="form-group">
              <label htmlFor="WorkingExperience">WorkingExperience</label>
              <input type="text" name="WorkingExperience" onChange={this.handleChange} value={this.state.WorkingExperience} placeholder="Enter Working Experience" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" onClick={this.addEmployeeDetails} className="btn">
            Submit
          </button>
        </div>
      </div>
    );
  }
}