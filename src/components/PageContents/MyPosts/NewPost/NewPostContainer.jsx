import React from 'react';
import {addPostActionCreator, updateNewPostMessageActionCreate} from "../../../../Redux/pageContentsReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newPostText: state.pageContents.newPostText
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        postChange: (newText) => {
            let action = updateNewPostMessageActionCreate(newText);
            dispatch(action);
        }
    }
};

const NewPostContainer = connect(mapStateToProps,mapDispatchToProps)(NewPost);
    
export default NewPostContainer;