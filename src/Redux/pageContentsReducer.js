const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_MESSAGE= "UPDATE-NEW-POST-MESSAGE";

const pageContentsReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 5,
                message: state.newPostText,
                likes_counts: 0
            };
            state.posts.push(post);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_MESSAGE:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostMessageActionCreate = (newText) => ({type: UPDATE_NEW_POST_MESSAGE,
    newText: newText});

export default pageContentsReducer;