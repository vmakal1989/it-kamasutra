import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogsUser = (props) => {

    let path = '/dialogs/id' + props.id;

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

    let dialogsDate = [
        {name: 'Vitali', id: '1'},
        {name: 'Slava', id: '2'},
        {name: 'Valera', id: '3'},
        {name: 'Kristina', id: '4'}
    ]

    let messagesDate = [
        {messages: 'Hello My friend!'},
        {messages: 'I follow  for my dreams'},
        {messages: 'And they will be mine'},
    ]

    return (
        <div className={style.dialogsBody}>
            <div>
                <DialogsUser name={dialogsDate[0].name} id={dialogsDate[0].id} />
                <DialogsUser name={dialogsDate[1].name} id={dialogsDate[1].id} />
                <DialogsUser name={dialogsDate[2].name} id={dialogsDate[2].id} />
                <DialogsUser name={dialogsDate[3].name} id={dialogsDate[3].id} />
            </div>
            <div className={style.comments}>
                <MessagesUser messages={messagesDate[0].messages} />
                <MessagesUser messages={messagesDate[1].messages} />
                <MessagesUser messages={messagesDate[2].messages} />
            </div>
        </div>
    )
}

export default Dialogs;