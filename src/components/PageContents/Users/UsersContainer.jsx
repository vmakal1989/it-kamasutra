import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsers, toggleIsFetchingAC,
    unFollowAC
} from "../../../Redux/pageContentsReducers/usersReducer";
import React from "react";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../../common/Preloader/Preloader";
import s from "./Users.module.css";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://node-js-api-for-it-kamasuntra.herokuapp.com/users?page=${this.props.currentPage}
                                                                     &count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.SET_USERS(response.data.items);
                this.props.SET_TOTAL_COUNT(response.data.totalCount);
            });
    }
    onPageChange = (pageNumber)  => {
        this.props.SET_CURRENT_PAGE(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://node-js-api-for-it-kamasuntra.herokuapp.com/users?page=${pageNumber}
                                                                     &count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.SET_USERS(response.data.items);
            });
    }

    render() {
        return (
            <>
                <div className={s.preloader}>
                    {this.props.isFetching ? <Preloader/> : null}
                </div>
            <Users totalCount={this.props.totalCount}
                          pageSize={this.props.pageSize}
                          currentPage={this.props.currentPage}
                          users={this.props.users}
                          onPageChange={this.onPageChange}
                          FOLLOW={this.props.FOLLOW}
                          UNFOLLOW={this.props.UNFOLLOW}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        },
        toggleIsFetching: (isFetching) => {
            let action = toggleIsFetchingAC(isFetching);
            dispatch(action);
        }
    }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);


export default UsersContainer;