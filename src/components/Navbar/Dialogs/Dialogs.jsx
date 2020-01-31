import React from 'react';
import style from './Dialogs.module.css';
import DialogUser from "./DialogUser/Dialog";
import MessagesUser from "./MessagesUser/Message";

const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let action = {type: 'ADD-MESSAGE'}
       props.dispatch(action);
    };

    let onChangeMessage = () => {
        let newMessageText = newMessageElement.current.value;
        let action = {type: 'UPDATE-NEW-MESSAGE-TEXT', newText: newMessageText}
        props.dispatch(action);
    };


    let dialogsElement = props.dateDialogs.dialogs.map( d => <DialogUser name={d.name} id={d.id} /> );
    let messagesElement = props.dateDialogs.messages.map( m => <MessagesUser messages={m.message} />);



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
                    <textarea ref={newMessageElement}
                              onChange={onChangeMessage}
                              value={props.newMessageText}
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