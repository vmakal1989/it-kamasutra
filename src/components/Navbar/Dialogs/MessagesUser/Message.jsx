import React from 'react';
import style from './../Dialogs.module.css';


const MessagesUser = (props) => {
    return (
        <div>
            {props.messages}
        </div>
    )
}

export default MessagesUser;