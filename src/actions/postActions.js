import { FETCH_POSTS, NEW_POST } from './types';


export function fetchPosts() {
    return (dispatch) =>{
        dispatch({
            type: 'CLEAR_MESSAGES'
        });
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'get',
        }).then((response) => {
            if (response.ok) {
                return response.json().then((posts) => {
                    console.log(posts);
                    dispatch({
                        type: "FETCH_POSTS",
                        payload: posts
                    })
                });
            }else{
                console.log("have some error");
            }
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
