import React from 'react';
import {addPostActionCreator, updateNewPostMessageActionCreate} from "../../../../Redux/pageContentsReducer";
import NewPost from "./NewPost";

const NewPostContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    };

    let postChange = (newText) => {
        let action = updateNewPostMessageActionCreate(newText);
        props.store.dispatch(action);
    };

    return <NewPost addPost = {addPost}
                    postChange = {postChange}
                    newPostText = {state.pageContents.newPostText} />
}
    
export default NewPostContainer;