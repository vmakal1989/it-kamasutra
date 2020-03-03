import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsers,
    unFollowAC
} from "../../../Redux/pageContentsReducers/usersReducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
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
        },
        SET_TOTAL_COUNT: (totalUsersCount) => {
            let action = setTotalUsersCountAC(totalUsersCount);
            dispatch(action);
        },
        SET_CURRENT_PAGE: (currentPage) => {
            let action = setCurrentPageAC(currentPage);
            dispatch(action);
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;