import React from 'react';
import style from './NewPost.module.css';
import {Field, reset, reduxForm} from "redux-form";

const NewPost = (props) => {

    let onSubmit = (formData) => {
        console.log(formData);
        props.addNewPost(formData);
    };

    return (
        <div className={style.newpost}>
            <ReduxFormNewPost onSubmit={onSubmit}/>
        </div>
    )
};

const FormNewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'text'} component={'textarea'} value={props.newPostText} />
            </div>
            <div>
                <button >Add post</button>
            </div>
        </form>
    )
};

const afterSubmit = (result, dispatch) =>
    dispatch(reset('newPost'));

const ReduxFormNewPost = reduxForm({form: 'newPost', onSubmitSuccess: afterSubmit})(FormNewPost);


export default NewPost;