import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollow
} from "../../../Redux/pageContentsReducers/usersReducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import s from "./Users.module.css";
import {usersAPI} from "../../../api/api";

class usersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }
    onPageChange = (pageNumber)  => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
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
                          currentPage={this.props.setCurrentPage}
                          users={this.props.users}
                          onPageChange={this.onPageChange}
                          follow={this.props.follow}
                          unFollow={this.props.unFollow}/>
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

const UsersContainer = connect(mapStateToProps,
    {follow, unFollow, setUsers, setTotalUsersCount, setCurrentPage,  toggleIsFetching
    })(usersAPIComponent);


export default UsersContainer;