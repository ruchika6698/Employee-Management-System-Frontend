import React from "react";
import loginImg from "../loginlogo.png";
import empService from '../Services/EmployeeService'
let service = new empService()

export class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      City:'',
      Designation:'',
      WorkingExperience:''
    }
  }
   handleChange= (e)=> { 
    console.log(e.target.value);
     
    this.setState({[e.target.name]:e.target.value});  
    console.log(this.state);
    
  }  
  update=(e) => {
    e.preventDefault();
    console.log(this.state);
    let requestData ={
      City:this.state.City,
      Designation:this.state.Designation,
      WorkingExperience:this.state.WorkingExperience
    }
    service.update(requestData).then((data)=>{
      console.log(" Employee Details Successfully Updated", data);
      
    }).catch((err)=>{
      console.log(err);
      
    })
  }

 render() 
 {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Update Employee Details</div>
        <div className="content">
          <div className="form">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form-group">
              <label htmlFor="City">City</label>
              <input type="text" name="City" onChange={this.handleChange} value={this.state.City} placeholder="City" />
            </div>
           <div className="form-group">
              <label htmlFor="Designation">Designation</label>
              <input type="text" name="Designation" onChange={this.handleChange} value={this.state.Designation} placeholder="Designation" />
            </div>
            <div className="form-group">
              <label htmlFor="WorkingExperience">WorkingExperience</label>
              <input type="text" name="WorkingExperience" onChange={this.handleChange} value={this.state.WorkingExperience} placeholder="Working Experience" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" onClick={this.update} className="btn">
            Update Details
          </button>
        </div>
      </div>
    );
  }
}