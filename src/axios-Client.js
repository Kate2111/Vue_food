import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'www.themealdb.com/api/json/v1/1/',
  });

export default axiosClient;