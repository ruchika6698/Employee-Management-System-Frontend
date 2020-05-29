import React from "react";
import empService from '../Services/EmployeeService'
import {Link } from "react-router-dom";
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
  //method for login
  login=(e) => {
    e.preventDefault();
    console.log(this.state);
    let requestData ={
      Username:this.state.Username,
      Password:this.state.Password
    }
    service.login(requestData).then((json)=>{
      this.props.history.push("/dashboard");
      console.log("responce data==>",json);
    if(json.data.status==='Success'){  
    alert('Login Sucessfull !!');  
    }   
      
    }).catch((err)=>{
      console.log(err);
      
    })
    
  }
  render() 
  {
    return (
      <div class="bg-img">
      <form  class="container">
        <h2 align="center">Login</h2>
        
        <p>Username</p>
            <input type="text" name="Username" onChange={this.handleChange} value={this.state.Username} placeholder="Enter Username" required/>
            <p>Password</p>
            <input type="Password" name="Password" onChange={this.handleChange} value={this.state.Password} placeholder="Enter Password"  required/>
        <input type="checkbox" checked="checked" name="remember" /> Remember me
      <div className="footer">
            
        <button type="button" onClick={this.login} className="btn">
          Login
        </button>
        <Link to="/register"><button type="button" className="btn">
           Sign Up
           </button></Link>
         </div>
    
      <span class="psw">Forgot <a href="#">password?</a></span>
      </form>
      </div>
    );
  }
}