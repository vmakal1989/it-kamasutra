import {Field, reduxForm, reset} from "redux-form";
import {FormsControls} from "../../../common/FormsControls/FormControls";
import {maxLength, minLength, required} from "../../../../helpers/validators/validators";
import React from "react";

const maxLength15 = maxLength(15);
const minLength2 = minLength(2);

const FormNewPost = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
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

export default ReduxFormNewPost