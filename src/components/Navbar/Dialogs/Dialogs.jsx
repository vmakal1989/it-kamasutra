import React from 'react';
import style from './Dialogs.module.css';
import DialogsUser from "./DialogUser/Dialog";
import MessagesUser from "./MessagesUser/Message";

const Dialogs = () => {

        let dialogs = [
            {name: 'Vitali', id: '1'},
            {name: 'Slava', id: '2'},
            {name: 'Valera', id: '3'},
            {name: 'Kristina', id: '4'}
        ];

        let messages = [
            {messages: 'Hello My friend!'},
            {messages: 'I follow  for my dreams'},
            {messages: 'And they will be mine'},
        ];

    let dialogsElement = dialogs.map( d => <DialogsUser name={d.name} id={d.id} /> );
    let messagesElement = messages.map( m => <MessagesUser messages={m.messages} />);

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