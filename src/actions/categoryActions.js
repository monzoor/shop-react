import { GET_CATEGORIES} from './types';

export function getCategories () {
    return (dispatch) => {
        dispatch ({
            type: 'CLEAR_MESSAGES'
        });
        return fetch(process.env.REACT_APP_API_HOST+'/cats', {
        // return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'get',
        })
        .then(status)
        .then ((response) => {
            return response.json().then((categories) => {
               dispatch({
                   type: "GET_CATEGORIES",
                   payload: categories
               })
            });
        })
    }
}

function status(res) {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res;
}
