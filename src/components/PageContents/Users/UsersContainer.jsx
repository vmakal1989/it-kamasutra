import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsers, unFollowAC} from "../../../Redux/pageContentsReducers/usersReducer";

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
        },

        SET_USERS: (users) => {
            let action = setUsers(users);
            dispatch(action);
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;