import React from "react";
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper';  
import {Link } from "react-router-dom";
import { Update} from './update'
import "../CSS/table.css";
import empService from '../Services/EmployeeService'
let service = new empService();

export class Getallemployee extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Employee: []
    }
  }
  //for fetching Employee list from database
 componentDidMount()
 {
   this.getallemployee();
 }
  getallemployee=() => {
    service.getallemployee().then((data)=>{
      console.log(" All Employee data found ",data.data.data);
      this.setState({Employee:data.data.data});
      console.log("Employee Array",this.state.Employee);
    }).catch((err)=>{
      console.log(err);
      
    })
  }

  //for fetching Employee data from database and update data
  update=(obj)=>{
    console.log("In update Method",obj);
    this.props.history.push('/update'+obj);

  }

  //for fetching Employee data from database by ID
  getspecificemployee= (ID) =>{  
    console.log("Employee ID",ID);
    service.getspecificemployee(ID).then((json) => {  
      console.log("responce data==>",json);
    if(json.data.status==='Success'){  
    alert('Record for ID found successfully!!');  
    }  
    })  
  }  

  //for delete Employee data from database by ID
  delete= (ID) =>{  
    console.log("Delete ID",ID);
    service.delete(ID).then((json) => {  
      console.log("responce data==>",json);
    if(json.data.status==='Success'){  
    alert('Record deleted successfully!!');  
    }  
    })  
  }  

  render() {
    return (
      <TableContainer component={Paper}> 
      <h2 align="right"> <Link to="/addemployee" align="right"><button type="button" className="btn btn-success" >
            Add Employee
          </button></Link>  <Link to="/" align="right"><button type="button" className="btn btn-primary" >
           Sign out
          </button></Link></h2>
      <h2 align="center">Employee List </h2>
        <Table stickyHeader aria-label="sticky table" id='Employee'>  
          <TableHead>  
            <TableRow>  
              <TableCell>ID</TableCell>  
              <TableCell align="right" >Employee Name</TableCell>  
              <TableCell align="right" >Username</TableCell>  
              <TableCell align="right" >Gender</TableCell>  
              <TableCell align="right" >City</TableCell>  
              <TableCell align="right" >Email Address</TableCell>  
              <TableCell align="right" >Designation</TableCell>  
              <TableCell align="right" >Working Experience</TableCell> 
              <TableCell align="right" >Get Data </TableCell>
              <TableCell align="right" >Update</TableCell> 
              <TableCell align="right" >Delete</TableCell>
            </TableRow>  
          </TableHead>  

          <TableBody>  
          {  
              this.state.Employee.map((d, index) => {  
                return <TableRow key={index}>  
                  <TableCell component="th" scope="row">  
                    {d.id}  
                  </TableCell>  
                  <TableCell align="right">{d.employeeName}</TableCell>  
                  <TableCell align="right">{d.username}</TableCell>  
                  <TableCell align="right">{d.gender}</TableCell>  
                  <TableCell align="right">{d.city}</TableCell>  
                  <TableCell align="right">{d.emailID}</TableCell>  
                  <TableCell align="right">{d.designation}</TableCell>  
                  <TableCell align="right">{d.workingExperience}</TableCell>  
                  <TableCell align="right"><button type="button" onClick={()=>this.getspecificemployee(d.id)} className="btn btn-info"> Get Data</button></TableCell>
                  <TableCell align="right"><Link to={{pathname:'/update' , aboutProps:{myObj: d}}}> Update </Link></TableCell>  
                  <TableCell align="right"><button type="button" onClick={()=>this.delete(d.id)} className="btn btn-danger"> Delete </button></TableCell>   
                </TableRow>  
              })  
            }  
          </TableBody>  
        </Table>  
      </TableContainer>  
    );
  }
}