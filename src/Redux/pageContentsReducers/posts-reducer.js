const ADD_POST = "ADD-POST";

let initialState = {
    posts: [
        {id: '1', message: 'Hello, I am Vitali!', likes_counts: '40', image: 'http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg'},
        {id: '2', message:'It is my first day programing on React!', likes_counts: 56}
    ],
    newPostText: 'It world'
};

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let post = {
                id: 5,
                message: action.text,
                likes_counts: 0
            };
            return {
                ...state,
                posts: [...state.posts, post]
            };
        }
        default:
            return state;
    }
};

export const addNewPost = (data) => {
    return (dispatch) => {
       dispatch(addPost(data.text));
    }

};

export const addPost = (text) => ({type: ADD_POST, text});


export default postsReducer;