import React from 'react';
import {addPost, postChange} from "../../../../Redux/pageContentsReducers/postsReducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newPostText: state.pageContents.newPostText
    }
};


const NewPostContainer = connect(mapStateToProps,{addPost, postChange})(NewPost);
    
export default NewPostContainer;