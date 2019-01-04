import axios from 'axios';

const firebase = axios.create({
    baseURL: 'https://myportfolio-c72d5.firebaseio.com/'
});

export default firebase;