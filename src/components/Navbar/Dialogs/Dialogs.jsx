import React from 'react';
import style from './Dialogs.module.css';
import DialogUser from "./DialogUser/Dialog";
import MessagesUser from "./MessagesUser/Message";
import {Field, reduxForm, reset} from "redux-form";
const Dialogs = (props) => {

    let dialogsElement = props.dialogsElements.dialogs.map( d => <DialogUser name={d.name} id={d.id} /> );
    let messagesElement = props.dialogsElements.messages.map( m => <MessagesUser messages={m.message} />);

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
                    <Field name={'text'} component={'textarea'}/>
                </div>
                <div>
                    <button onClick={props.onSubmit}>Send</button>
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