import axios from 'axios'

const baseURL = 'http://127.0.0.1:9000';

const instance = axios.create({
    timeout: 1000
});


export async function getItems(filter, offset, limit) {
    let resp;
    if (filter) {
        resp = await instance.get(`${baseURL}/items?filter=${filter}&offset=${offset}&limit=${limit}`);
    } else {
        resp = await instance.get(`${baseURL}/items?offset=${offset}&limit=${limit}`);
    }
    if (resp.status === 200)
        return resp.data;
    return null;
}
