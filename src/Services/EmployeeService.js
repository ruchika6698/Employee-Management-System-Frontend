import axios from 'axios';

class Service {
    login(data){
        console.log(" login in axios service ",data);   
    return   axios.post('https://localhost:44343/api/employee/login',data);
    }

    register(data){
        console.log(" register in axios service ",data);
    return   axios.post('https://localhost:44343/api/employee/register',data);
    }

    addEmployeeDetails(data){
        console.log(" addemp in axios service ",data); 
    return   axios.post('https://localhost:44343/api/employee/addnewentry',data);
    }

    update(ID,data){
        console.log(" data in axios service ",(ID,data));
    return   axios.put('https://localhost:44343/api/employee/'+ID,data);
    }

    delete(ID){
        console.log(" Id in axios service ",ID);
    return   axios.delete('https://localhost:44343/api/employee/'+ID);
    }
    
    getallemployee() {
        console.log(" get in axios service ");
    return   axios.get('https://localhost:44343/api/employee');
    }
    getspecificemployee(ID) {
        console.log(" get data by ID in axios service ",ID);
    return   axios.get('https://localhost:44343/api/employee/'+ID);
    }
}
export default Service;