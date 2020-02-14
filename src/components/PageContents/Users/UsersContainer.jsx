import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unFollowAC} from "../../../Redux/pageContentsReducers/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        FOLLOW: (userID) => {
            let action = followAC(userID);
            dispatch(action);
        },

        UNFOLLOW: (userID) => {
            let action = unFollowAC(userID);
            dispatch(action);
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;