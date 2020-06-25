import React from 'react';
import style from './NewPost.module.css';
import {Field, reset, reduxForm} from "redux-form";
import {FormsControls} from "../../../common/FormsControls/FormControls";
import {maxLength, minLength, required} from "../../../../helpers/validators/validators";

const maxLength15 = maxLength(15);
const minLength2 = minLength(2);

const NewPost = (props) => {

    let onSubmit = (formData) => {
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
                <Field name={'text'}
                       component={FormsControls}
                       type={'textarea'}
                       validate={[required, maxLength15,minLength2]}/>
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