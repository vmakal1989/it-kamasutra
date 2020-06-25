import {addNewMessage} from "../../../Redux/pageContentsReducers/dialogsElements-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AuthRedirect} from "../../../hoc/AuthRendirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogsElements
    }
};

export default compose(
    AuthRedirect,
    connect(mapStateToProps,{addNewMessage})
)(Dialogs);