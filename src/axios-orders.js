import axios from 'axios';
const instance = axios.create({
    baseURL:'https://react-burger-builder-7b9a8.firebaseio.com/'
});
export default instance;