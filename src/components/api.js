import axios from 'axios';

// This makes it so we can use shortened url with api calls
export default axios.create({
  baseURL: `https://safetynet-server.herokuapp.com/`,
  withCredentials: true,
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest'
  }
});