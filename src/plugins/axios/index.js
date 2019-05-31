import axios from 'axios';

const request = axios.create();
request.defaults.timeout = 5000;

request.interceptors.request.use((config) => {
  return config;
}, (error) => {
  return Promise.reject(error);
});

request.interceptors.response.use((response) => {
  let { data } = response;
  return data;
}, (error) => {
  return Promise.reject(error);
});

export default request;
