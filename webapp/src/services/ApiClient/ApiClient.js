import config from '../../config';

/**
 * Gets data from the API.
 * @param {*} route The route of the action
 * @param {*} id The id of the resource
 * @param {*} queryParams Optional query params
 */
async function get(route, id, queryParams = null) {
    let queryParamString =
      queryParams !== null
        ? `?${Object.keys(queryParams)
            .map((key) => key + '=' + encodeURIComponent(queryParams[key]))
            .join('&')}`
        : null;

    const request = new Request(
        `${config.apiUrl + route}/${id}${queryParamString !== null ? queryParamString : ''}`,
        {
            method: 'GET',
        }
    );

    try {
        const response = await fetch(request);
        console.log(response);
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error('Request got non-ok response');
        }
    } catch (error) {
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