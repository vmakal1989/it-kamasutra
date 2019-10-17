import React from 'react';
import style from './Dialogs.module.css';
import DialogsUser from "./DialogUser/Dialog";
import MessagesUser from "./MessagesUser/Message";

const Dialogs = (props) => {

    let dialogsElement = props.dateDialogs.map( d => <DialogsUser name={d.name} id={d.id} /> );
    let messagesElement = props.dateMessages.map( m => <MessagesUser messages={m.message} />);

    return (
        <div className={style.dialogsBody}>
            <div>
                {dialogsElement}
            </div>
            <div className={style.comments}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;