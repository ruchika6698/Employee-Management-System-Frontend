import axios from 'axios';

class Service {
    login(data){
        console.log(" data in axios service ",data);   
    return   axios.post('https://localhost:44343/api/employee/login',data);
    }

    register(data){
        console.log(" data in axios service ",data);
    return   axios.post('https://localhost:44343/api/employee/register',data);
    }

    addEmployeeDetails(data){
        console.log(" data in axios service ",data); 
    return   axios.post('https://localhost:44343/api/employee/addnewentry',data);
    }

    // update(ID){
    //     console.log(" data in axios service ");
    // return   axios.put('https://localhost:44343/api/employee/8003');
    // }

    // delete(ID){
    //     console.log(" data in axios service ");
    // return   axios.delete('https://localhost:44343/api/employee/this.state.ID',ID);
    // }
    getallemployee() {
        console.log(" data in axios service ");
    return   axios.get('https://localhost:44343/api/employee');
    }
}
export default Service;