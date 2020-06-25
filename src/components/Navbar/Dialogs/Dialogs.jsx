import React from 'react';
import style from './Dialogs.module.css';
import DialogUser from "./DialogUser/Dialog";
import MessagesUser from "./MessagesUser/Message";
import {Field, reduxForm, reset} from "redux-form";
import {FormsControls} from "../../common/FormsControls/FormControls";
import {maxLength, minLength, required} from "../../../helpers/validators/validators";

const maxLength15 = maxLength(15);
const minLength2 = minLength(2);

const Dialogs = (props) => {
    let dialogsElement = props.dialogsElements.dialogs.map( d => <DialogUser key={d.id} name={d.name} id={d.id} /> );
    let messagesElement = props.dialogsElements.messages.map( m => <MessagesUser key={m.id}  messages={m.message} />);

    let onSubmit = (formData) => {
        props.addNewMessage(formData)
    };

    return (
        <div className={style.dialogsBody}>
            <div className={style.userBody}>
                {dialogsElement}
            </div>
            <div className={style.comments}>
                <div>
                    {messagesElement}
                </div>
                <ReduxDialogsForm {...props} onSubmit={onSubmit}/>
            </div>
        </div>
    )
};

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.sendMessage}>
                <div>
                    <Field name={'textarea'}
                           component={FormsControls}
                           type={'textarea'}
                           validate={[required, maxLength15,minLength2]}/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>
    )
};

const afterSubmit = (result, dispatch) => {
    dispatch(reset('dialogsForm'));
};

const ReduxDialogsForm = reduxForm({form: 'dialogsForm', onSubmitSuccess: afterSubmit})(DialogsForm);

export default Dialogs;