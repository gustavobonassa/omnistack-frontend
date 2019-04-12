import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-gumb.herokuapp.com',
});

export default api;