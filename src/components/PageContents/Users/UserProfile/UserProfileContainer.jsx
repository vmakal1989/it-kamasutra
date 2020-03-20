import React from 'react';
import {connect} from "react-redux";
import UserProfile from "./UserProfile";
import {withRouter} from "react-router-dom";
import {getUserProfile, getUserStatus} from "../../../../Redux/pageContentsReducers/userProfile-reducer";

class UserProfileContainerAPI extends React.Component   {
    componentDidMount() {

        let userId = this.props.match.params.userId;
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render () {
        return (
            <div>
                <UserProfile {...this.props}/>
            </div>
        )
    }
};

const mapStateToProps = (props) => {
    return {
        userProfile: props.userProfile.userProfile,
        userStatus: props.userProfile.userStatus
    }
};


const WithRouterUserProfileContainerAPI =  withRouter(UserProfileContainerAPI);

export  const UserProfileContainer = connect(mapStateToProps, {getUserProfile, getUserStatus} )(WithRouterUserProfileContainerAPI);