import { FETCH_POSTS, NEW_POST, CATEGORIES } from './types';


export function categories() {
    return (dispatch) =>{
        dispatch({
            type: 'CLEAR_MESSAGES'
        });
        return fetch(process.env.REACT_APP_API_HOST+'/cats', {
            method: 'get',
        })
        .then(status)
        .then((response) => {
            return response.json().then((cats) => {
                // console.log('++++++',cats);

               dispatch({
                   type: "CATEGORIES",
                   payload: cats
               })
            });
            // if (response.ok) {
            //     return response.json().then((posts) => {
            //         dispatch({
            //             type: "FETCH_POSTS",
            //             payload: posts
            //         })
            //     });
            // }else{
            //     throw (response);
            // }
        })
    }
}

export function fetchPosts() {
    return (dispatch) =>{
        dispatch({
            type: 'CLEAR_MESSAGES'
        });
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'get',
        })
        .then(status)
        .then((response) => {
            // console.log('++++++',response);
            return response.json().then((posts) => {
               dispatch({
                   type: "FETCH_POSTS",
                   payload: posts
               })
            });
            // if (response.ok) {
            //     return response.json().then((posts) => {
            //         dispatch({
            //             type: "FETCH_POSTS",
            //             payload: posts
            //         })
            //     });
            // }else{
            //     throw (response);
            // }
        })
    }
}


// export const fetchPosts = () => dispatch => {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts =>
//       dispatch({
//         type: FETCH_POSTS,
//         payload: posts
//       })
//     );
// };

function status(res) {
    if (!res.ok) {
        throw new Error(res.statusText);
    }
    return res;
}
