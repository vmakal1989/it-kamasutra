import {connect} from "react-redux";
import { follow, getUsers, setCurrentPage, unFollow } from "../../../Redux/pageContentsReducers/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import s from "./Users.module.css";
import {AuthRedirect} from "../../../hoc/AuthRendirect";

class usersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChange = (pageNumber)  => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    };

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
                          unFollow={this.props.unFollow}
                          isDisabled={this.props.isDisabled}/>
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
        isFetching: state.usersPage.isFetching,
        isDisabled: state.usersPage.isDisabled
    }
};

const UsersContainer = AuthRedirect(connect(mapStateToProps,
    {follow, unFollow, getUsers,setCurrentPage
    })(usersAPIComponent));


export default UsersContainer;