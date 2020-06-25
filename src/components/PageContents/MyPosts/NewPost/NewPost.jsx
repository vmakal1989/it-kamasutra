import React from 'react';
import style from './NewPost.module.css';
import ReduxFormNewPost from "./FormNewPost";



const NewPost = (props) => {

    const onSubmit = (formData) => {
        props.addNewPost(formData);
    };

    return (
        <div className={style.newpost}>
            <ReduxFormNewPost onSubmit={onSubmit}/>
        </div>
    )
};







export default NewPost;