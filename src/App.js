import React, { Component } from 'react';
import "./CSS/style.css";
import "./CSS/table.css";
import "./CSS/update.css";
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom';
import { Login} from './Components/login'
import { Register} from './Components/register'
import { AddEmployeeDetails} from './Components/addEmployeeDetails'
import { Getallemployee} from './Components/getallemployee'
import { Update} from './Components/update'

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/addemployee" component={AddEmployeeDetails} />
      <Route path="/dashboard" component={Getallemployee} />
      <Route path="/update" component={Update} />
      
       
      </Router>
      </div>
    );
  }
}
export default App;