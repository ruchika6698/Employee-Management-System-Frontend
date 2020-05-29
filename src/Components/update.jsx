import React from "react";
import empService from '../Services/EmployeeService'
import "../CSS/update.css";
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
  
  componentDidMount(){
    let object=this.props.location.aboutProps;
    console.log("data",object.myObj);
    this.setState({ID:object.myObj.id});
    console.log("Employee ID",this.state.ID);
    this.setState({City:object.myObj.city});
    console.log("Employee City",this.state.City);
    this.setState({Designation:object.myObj.designation});
    console.log("Employee Designationr",this.state.Designation);
    this.setState({WorkingExperience:object.myObj.workingExperience});
    console.log("Employee WorkingExperience",this.state.WorkingExperience);
    
    console.log("about",this.props.location.aboutProps);
  }
  
   handleChange= (e)=> { 
    console.log(e.target.value);
     
    this.setState({[e.target.name]:e.target.value});  
    console.log(this.state);
    
  }  

  //method for update data
  update=(ID) => {
    console.log("Employee ID",this.state.ID);
    console.log(this.state);
    let requestData ={
      City:this.state.City,
      Designation:this.state.Designation,
      WorkingExperience:this.state.WorkingExperience
    }
    service.update(this.state.ID,requestData).then((data)=>{
      this.props.history.push("/dashboard");
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
            Submit
          </button>
        </div>
      </div>
    );
  }
}