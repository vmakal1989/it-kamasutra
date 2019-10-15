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
    return (
        <div className={style.dialogsBody}>
            <div>
                <DialogsUser name='Vitali' id='1' />
                <DialogsUser name='Slava' id='2' />
                <DialogsUser name='Valera' id='3' />
                <DialogsUser name='Kristina' id='4' />
            </div>
            <div className={style.comments}>
                <MessagesUser messages='Hello My friend!' />
                <MessagesUser messages='I follow  for my dreams!' />
                <MessagesUser messages='And they will be mine!' />
            </div>
        </div>
    )
}

export default Dialogs;