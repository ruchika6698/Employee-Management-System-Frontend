import React from "react";
import empService from '../Services/EmployeeService'
let service = new empService()

export class Update extends React.Component {
  constructor(props) {
    super(props);
    //let object=this.props.match.params.obj;
    //console.log("object is",JSON.parse(this.props.comments));
    this.state={
      ID:'',
      EmployeeName:'',
      Username:'',
      Gender:'',
      City:'',
      EmailID:'',
      Designation:'',
      WorkingExperience:''
    }
  }
  
  componentDidMount(){
    let object=this.props.location.aboutProps;
    console.log("data",object.myObj);
    this.setState({ID:object.myObj.id});
    console.log("Employee ID",this.state.ID);
    this.setState({EmployeeName:object.myObj.employeeName});
    console.log("Employee Name",this.state.EmployeeName);
    this.setState({Username:object.myObj.username});
    console.log("Employee Username",this.state.Username);
    this.setState({Gender:object.myObj.gender});
    console.log("Employee Gender",this.state.Gender);
    this.setState({City:object.myObj.city});
    console.log("Employee City",this.state.City);
    this.setState({EmailID:object.myObj.emailID});
    console.log("Employee Email Address",this.state.EmailID);
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
              <label htmlFor="ID">ID</label>
              <input type="text" name="ID" onChange={this.handleChange} value={this.state.ID} placeholder="Employee ID" />
            </div>
            <div className="form-group">
              <label htmlFor="EmployeeName">EmployeeName</label>
              <input type="text" name="EmployeeName" onChange={this.handleChange} value={this.state.EmployeeName} placeholder="Employee Name" />
            </div>
            <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input type="text" name="Username" onChange={this.handleChange} value={this.state.Username} placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="Gender">Gender</label>
              <input type="text" name="Gender" onChange={this.handleChange} value={this.state.Gender} placeholder="Gender" />
            </div>
            <div className="form-group">
              <label htmlFor="City">City</label>
              <input type="text" name="City" onChange={this.handleChange} value={this.state.City} placeholder="City" />
            </div>
            <div className="form-group">
              <label htmlFor="EmailID">EmailID</label>
              <input type="text" name="EmailID" onChange={this.handleChange} value={this.state.EmailID} placeholder="Email Address" />
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