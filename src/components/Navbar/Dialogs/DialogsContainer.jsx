import {addMessage, changeMessage} from "../../../Redux/pageContentsReducers/dialogsElementsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogsElements
    }
};

const DialogsContainer = connect(mapStateToProps,{addMessage,changeMessage})(Dialogs);

export default DialogsContainer;