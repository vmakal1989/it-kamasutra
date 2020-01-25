import React from 'react';
import style from './Dialogs.module.css';
import DialogUser from "./DialogUser/Dialog";
import MessagesUser from "./MessagesUser/Message";

const Dialogs = (props) => {
    let dialogsElement = props.dateDialogs.dialogs.map( d => <DialogUser name={d.name} id={d.id} /> );
    let messagesElement = props.dateDialogs.messages.map( m => <MessagesUser messages={m.message} />);

    return (
        <div className={style.dialogsBody}>
            <div className={style.userBody}>
                {dialogsElement}
            </div>
            <div className={style.comments}>
                {messagesElement}
        </div>
        </div>
    )
}

export default Dialogs;