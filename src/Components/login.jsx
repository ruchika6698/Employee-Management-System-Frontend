import React from "react";
import loginImg from "../loginlogo.png";
import empService from '../Services/EmployeeService'
let service = new empService()

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Username:'',
      Password:''
    }
  }
  
  handleChange= (e)=> { 
    console.log(e.target.value);
     
    this.setState({[e.target.name]:e.target.value});  
    console.log(this.state);
    
  }  
  login=(e) => {
    e.preventDefault();
    console.log(this.state);
    let requestData ={
      Username:this.state.Username,
      Password:this.state.Password
    }
    service.login(requestData).then((data)=>{
      console.log(" succesfull login ", data);
      
    }).catch((err)=>{
      console.log(err);
      
    })
    
  }
  render() 
  {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="Username">Username   </label>
              <input type="text" name="Username" onChange={this.handleChange} value={this.state.Username}  placeholder="Username" />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password    </label>
              <input type="Password" name="Password" onChange={this.handleChange} value={this.state.Password}  placeholder="Password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" onClick={this.login} className="btn">
            Sign In
          </button>
        </div>
      </div>
    );
  }
}