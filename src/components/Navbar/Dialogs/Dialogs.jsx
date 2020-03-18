import React from 'react';
import style from './Dialogs.module.css';
import DialogUser from "./DialogUser/Dialog";
import MessagesUser from "./MessagesUser/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {


    let addMessage = () => {
       props.addMessage();
    };

    let changeMessage = (e) => {
        let newMessageText = e.target.value;
        props.changeMessage(newMessageText);
    };


    let dialogsElement = props.dialogsElements.dialogs.map( d => <DialogUser name={d.name} id={d.id} /> );
    let messagesElement = props.dialogsElements.messages.map( m => <MessagesUser messages={m.message} />);

    return (
        <div className={style.dialogsBody}>
            <div className={style.userBody}>
                {dialogsElement}
            </div>
            <div className={style.comments}>
                <div>
                    {messagesElement}
                </div>
                <div className={style.sendMessage}>
                    <textarea onChange={changeMessage}
                              value={props.dialogsElements.newMessageText}
                              />
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default Dialogs;