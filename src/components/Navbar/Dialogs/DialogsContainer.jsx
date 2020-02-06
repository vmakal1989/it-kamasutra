import React from 'react';
import {addMessageActionCreator, updateNewDialogMessageActionCreate} from "../../../Redux/dialogsElementsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        let action = addMessageActionCreator();
       props.store.dispatch(action);
    };

    let changeMessage = (newMessageText) => {
        let action = updateNewDialogMessageActionCreate(newMessageText);
        props.store.dispatch(action);
    };

    return <Dialogs addMessage={addMessage}
                    changeMessage={changeMessage}
                    dialogsElements={state.dialogsElements}/>

};

export default DialogsContainer;