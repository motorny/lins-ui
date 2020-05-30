import axios from 'axios'
import Cookies from 'js-cookie';
import {toast} from 'react-toastify';

const baseURL = process.env.REACT_APP_API_URL || 'http://127.0.0.1:9000';

const instance = axios.create({
    timeout: 10000
});

async function doGet(...args) {
    const resp = await instance.get(...args).catch((error) => {
        if (error.response) {
            toast.error(`${error.response.status}: ${error.response.data.message || error.response.data}`);
        } else {
            toast.error(error.message);
        }
        return null;
    });
    if (resp) {
        return resp.data
    }
    return null;
}

async function doPost(...args) {
    const resp = await instance.post(...args).catch((error) => {
        if (error.response) {
            toast.error(`${error.response.status}: ${error.response.data.message || error.response.data}`);
        } else {
            toast.error(error.message);
        }
        return null;
    });
    if (resp) {
        return resp.data
    }
    return null;
}

async function doDelete(...args) {
    const resp = await instance.delete(...args).catch((error) => {
        if (error.response) {
            toast.error(`${error.response.status}: ${error.response.data.message || error.response.data}`);
        } else {
            toast.error(error.message);
        }
        return null;
    });
    if (resp) {
        return resp.data
    }
    return null;
}



export async function getItems(filter, offset, limit) {
    let queryUrl = `${baseURL}/items?offset=${offset || 0}`;
    if (limit)
        queryUrl = queryUrl + `&limit=${limit}`;
    if (filter)
        queryUrl = queryUrl + `&filter=${filter}`;
    return doGet(queryUrl);

}

export async function getItemDetails(itemID) {
    const queryUrl = `${baseURL}/items/${itemID}`;
    return doGet(queryUrl);
}

export async function getComments(itemID) {
    const queryUrl = `${baseURL}/comments/${itemID}`;
    return doGet(queryUrl);
}

export async function addNewItem(body) {
    const queryUrl = `${baseURL}/items/`;
    const token = Cookies.get('token');
    if (!token) {
        toast.error("Not authorized!");
        return null;
    }
    return doPost(queryUrl, body, {
        headers: {Authorization: "Bearer " + token}
    });
}

export async function addNewComment(body) {
    const queryUrl = `${baseURL}/comments/`;
    const token = Cookies.get('token');
    if (!token) {
        toast.error("Not authorized!");
        return null;
    }
    return doPost(queryUrl, body, {
        headers: {Authorization: "Bearer " + token}
    });
}

export async function login(body) {
    const queryUrl = `${baseURL}/auth/`;
    return doPost(queryUrl, body);
}

export async function deleteComment(commentID) {
    const queryUrl = `${baseURL}/comments/${commentID}`;
    const token = Cookies.get('token');
    if (!token) {
        toast.error("Not authorized!");
        return null;
    }
    return doDelete(queryUrl, {
        headers: {Authorization: "Bearer " + token}
    });
}

export async function deleteItem(itemID) {
    const queryUrl = `${baseURL}/items/${itemID}`;
    const token = Cookies.get('token');
    if (!token) {
        toast.error("Not authorized!");
        return null;
    }
    return doDelete(queryUrl, {
        headers: {Authorization: "Bearer " + token}
    });
}

export async function getProfile(userID) {
    const queryUrl = `${baseURL}/profile/${userID}`;
    return doGet(queryUrl);
}

export const getImageUrl = (image_rel_url) => (`${baseURL}${image_rel_url}`);