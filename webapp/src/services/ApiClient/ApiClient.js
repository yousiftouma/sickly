import { apiConfig } from '../../config';
import { getToken } from '../Auth/AuthService';
/**
 * Gets data from the API.
 * @param {*} route The route of the action
 * @param {*} id Optional id of the resource
 * @param {*} queryParams Optional query params
 */
async function get(route, id = null, queryParams = null) {
    const token = getToken();
    console.log('token:');
    console.log(token);

    let queryParamString =
      queryParams !== null
        ? `?${Object.keys(queryParams)
            .map((key) => key + '=' + encodeURIComponent(queryParams[key]))
            .join('&')}`
        : '';
    
    let idString = id !== null ? id : '';

    const headers = new Headers();
    headers.append('Authorization', `Bearer + ${token}`);

    const request = new Request(
        `${apiConfig.apiUrl}/${route}/${idString}${queryParamString}`,
        {
            method: 'GET',
            headers: headers,
        }
    );

    try {
        const response = await fetch(request);
        console.log('log in api client:');
        console.log(response);
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error('Request got non-ok response');
        }
    } catch (error) {
        console.log('log in api client catch:')
        console.error('Got error in get request', error);
    };
};

/**
 * 
 * @param {*} route 
 * @param {*} data 
 */
async function post(route, data) {

};

/**
 * 
 * @param {*} route 
 * @param {*} id 
 * @param {*} data 
 */
async function put(route, id, data) {

};

export { get, post, put };