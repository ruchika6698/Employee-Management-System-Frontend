import React from "react";
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper';  
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


  render() {
    return (
        <TableContainer component={Paper}> 
        <Table stickyHeader  aria-label="sticky table">  
          <TableHead>  
            <TableRow>  
              <TableCell>ID</TableCell>  
              <TableCell align="right">EmployeeName</TableCell>  
              <TableCell align="right">Username</TableCell>  
              <TableCell align="right">Gender</TableCell>  
              <TableCell align="right">City</TableCell>  
              <TableCell align="right">EmailID</TableCell>  
              <TableCell align="right">Designation</TableCell>  
              <TableCell style={{paddingRight:"60px"}} align="right" >WorkingExperience</TableCell>  
            </TableRow>  
          </TableHead>  

          <TableBody>  
          {  
              this.state.Employee.map((d, index) => {  
                return <TableRow key={index}>  
                  <TableCell component="th" scope="row">  
                    {d.ID}  
                  </TableCell>  
                  <TableCell align="right">{d.EmployeeName}</TableCell>  
                  <TableCell align="right">{d.Username}</TableCell>  
                  <TableCell align="right">{d.Gender}</TableCell>  
                  <TableCell align="right">{d.City}</TableCell>  
                  <TableCell align="right">{d.EmailID}</TableCell>  
                  <TableCell align="right">{d.Designation}</TableCell>  
                  <TableCell style={{paddingRight:"114px"}} align="right">{d.WorkingExperience}</TableCell>  
                </TableRow>  
              })  
            }  
          </TableBody>  
        </Table>  
      </TableContainer>  
    );
  }
}

export default Getallemployee