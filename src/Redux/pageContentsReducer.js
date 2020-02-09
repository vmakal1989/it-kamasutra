const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_MESSAGE= "UPDATE-NEW-POST-MESSAGE";

let initialState = {
    posts: [
        {id: '1', message: 'Hello, I am Vitali!', likes_counts: '40', image: 'http://we.com.mk/wp-content/uploads/2016/12/greece-islands.jpg'},
        {id: '2', message:'It is my first day programing on React!', likes_counts: 56}
    ],
    newPostText: 'It world'
};

const pageContentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let post = {
                id: 5,
                message: state.newPostText,
                likes_counts: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(post);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostMessageActionCreate = (newText) => ({type: UPDATE_NEW_POST_MESSAGE,
    newText: newText});

export default pageContentsReducer;