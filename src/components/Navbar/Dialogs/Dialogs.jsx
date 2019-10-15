import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogsUser = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={style.dialogs}>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

const MessagesUser = (props) => {
    return (
        <div>
            {props.messages}
        </div>
    )
}
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