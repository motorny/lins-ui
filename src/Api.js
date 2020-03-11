import axios from 'axios'

const baseURL = 'http://127.0.0.1:9000';

const instance = axios.create({
    timeout: 1000
});


export function getItems(filter) {
    if (filter) {
        return instance.get(`${baseURL}/items?filter=${filter}`);
    }
    return instance.get(`${baseURL}/items`);
}
