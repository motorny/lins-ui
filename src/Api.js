import axios from 'axios'

const baseURL = 'http://127.0.0.1:9000';

const instance = axios.create({
    timeout: 1000
});


export function getItems() {
    return instance.get(`${baseURL}/items`);
}
