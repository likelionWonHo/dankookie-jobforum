import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 10000,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json'
    }
})