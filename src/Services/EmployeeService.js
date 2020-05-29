import axios from 'axios';

class Service {
    //API calling for Login
    login(data){
        console.log(" login in axios service ",data);   
    return   axios.post('https://localhost:44343/api/employee/login',data);
    }

    //API calling for Register
    register(data){
        console.log(" register in axios service ",data);
    return   axios.post('https://localhost:44343/api/employee/register',data);
    }

    //API calling for add employee Details
    addEmployeeDetails(data){
        console.log(" addemp in axios service ",data); 
    return   axios.post('https://localhost:44343/api/employee/addnewentry',data);
    }

    //API calling for Update data
    update(ID,data){
        console.log(" data in axios service ",(ID,data));
    return   axios.put('https://localhost:44343/api/employee/'+ID,data);
    }

    //API calling for delete data by ID
    delete(ID){
        console.log(" Id in axios service ",ID);
    return   axios.delete('https://localhost:44343/api/employee/'+ID);
    }
    
    //API calling for get all employee data
    getallemployee() {
        console.log(" get in axios service ");
    return   axios.get('https://localhost:44343/api/employee');
    }

     //API calling for get employee data by ID
    getspecificemployee(ID) {
        console.log(" get data by ID in axios service ",ID);
    return   axios.get('https://localhost:44343/api/employee/'+ID);
    }
}
export default Service;