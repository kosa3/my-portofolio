import axios from 'axios';

const firebase = axios.create({
    baseURL: 'your firebase app url'
});

export default firebase;