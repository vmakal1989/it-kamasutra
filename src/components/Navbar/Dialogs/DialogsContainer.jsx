import {addMessage, changeMessage} from "../../../Redux/pageContentsReducers/dialogsElements-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AuthRedirect} from "../../../hoc/AuthRendirect";

const mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogsElements
    }
};



const DialogsContainer = AuthRedirect(connect(mapStateToProps,{addMessage,changeMessage})(Dialogs));

export default DialogsContainer;