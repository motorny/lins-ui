import axios from 'axios'

const baseURL = 'http://127.0.0.1:9000';

const instance = axios.create({
    timeout: 1000
});


export async function getItems(filter, offset, limit) {
    let queryUrl = `${baseURL}/items?offset=${offset || 0}`;
    if (limit)
        queryUrl = queryUrl + `&limit=${limit}`;
    if (filter)
        queryUrl = queryUrl + `&filter=${filter}`;

    const resp = await instance.get(queryUrl);
    if (resp.status === 200)
        return resp.data;
    return null;
}
