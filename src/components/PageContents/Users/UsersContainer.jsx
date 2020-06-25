import {connect} from "react-redux";
import { follow, requestUsers, setCurrentPage, unFollow } from "../../../Redux/pageContentsReducers/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import s from "./Users.module.css";
import {AuthRedirect} from "../../../hoc/AuthRendirect";
import {compose} from "redux";
import {
    getCurrentPage, getIsDisabled,
    getIsFetching,
    getPageSize,
    getTotalCount, getUsers
} from "../../../Redux/pageContentsReducers/users-selectors";

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
                          currentPage={this.props.currentPage}
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
        users: getUsers(state),
        totalCount: getTotalCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isDisabled: getIsDisabled(state)
    }

};

export default compose(
    AuthRedirect,
    connect(mapStateToProps, {follow, unFollow, getUsers: requestUsers,setCurrentPage}))(usersAPIComponent)