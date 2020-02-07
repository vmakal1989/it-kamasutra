import React from 'react';
import {addMessageActionCreator, updateNewDialogMessageActionCreate} from "../../../Redux/dialogsElementsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogsElements
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            let action = addMessageActionCreator();
            dispatch(action);
        },
        changeMessage: (newMessageText) => {
            let action = updateNewDialogMessageActionCreate(newMessageText);
            dispatch(action);
        }
    }
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;