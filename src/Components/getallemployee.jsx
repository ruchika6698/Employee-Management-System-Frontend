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
import empService from '../Services/EmployeeService'
let service = new empService();

export class Getallemployee extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      Employee: []
    }
  }

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

  update=(obj)=>{
    console.log("In update Method",obj);
    this.props.history.push('/update'+obj);

  }

  getspecificemployee= (ID) =>{  
    console.log("Employee ID",ID);
    service.getspecificemployee(ID).then((json) => {  
      console.log("responce data==>",json);
    if(json.data.status==='Success'){  
    alert('Record for ID found successfully!!');  
    }  
    })  
  }  

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
        <Table stickyHeader  aria-label="sticky table">  
          <TableHead>  
            <TableRow>  
              <TableCell>id</TableCell>  
              <TableCell align="right">employeeName</TableCell>  
              <TableCell align="right">username</TableCell>  
              <TableCell align="right">gender</TableCell>  
              <TableCell align="right">city</TableCell>  
              <TableCell align="right">emailID</TableCell>  
              <TableCell align="right">designation</TableCell>  
              <TableCell align="right" >workingExperience</TableCell> 
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
                  <TableCell align="right"><button type="button" onClick={()=>this.getspecificemployee(d.id)} className="btn btn-danger"> Get Data</button></TableCell>
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