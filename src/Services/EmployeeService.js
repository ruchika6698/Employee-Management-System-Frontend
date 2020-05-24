import axios from 'axios';

const axios = require('axios');

async function login() {
    let res = await axios.post('https://localhost:44343/api/employee/login');
    return res;
    console.log(this.state);
}
login();