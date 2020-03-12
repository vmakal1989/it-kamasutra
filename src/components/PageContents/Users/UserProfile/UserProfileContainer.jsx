import React from 'react';
import {connect} from "react-redux";
import UserProfile from "./UserProfile";
import {withRouter} from "react-router-dom";
import {getUserProfile} from "../../../../Redux/pageContentsReducers/userProfile-reducer";

class UserProfileContainerAPI extends React.Component   {
    componentDidMount() {

        let userId = this.props.match.params.userId;

        this.props.getUserProfile(userId)
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
        userProfile: props.userProfile.userProfile
    }
};


const WithRouterUserProfileContainerAPI =  withRouter(UserProfileContainerAPI);

export  const UserProfileContainer = connect(mapStateToProps, {getUserProfile} )(WithRouterUserProfileContainerAPI);