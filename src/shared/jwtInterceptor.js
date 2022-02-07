import axios from 'axios';
import { getItem } from '../utils/localStorageService';

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    (config) => {
        const userData = JSON.parse(getItem('userData'))
        if(userData.tokenObj.id_token) {
            if (config.method !== 'OPTIONS') {
              config.headers.Authorization = userData.tokenObj.id_token;
            }
        }
        return config;
    }, (error) => {

    }
)

export default axiosInstance;
