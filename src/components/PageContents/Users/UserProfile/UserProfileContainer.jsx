import React from 'react';
import {connect} from "react-redux";
import UserProfile from "./UserProfile";
import {setUserProfile} from "../../../../Redux/pageContentsReducers/userProfile-reducer";
import * as axios from "axios";
import {withRouter} from "react-router-dom";

class UserProfileContainerAPI extends React.Component   {
    componentDidMount() {

        let userId = this.props.match.params.userId;

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {withCredentials: true})
            .then(response => {
                this.props.setUserProfile(response.data);
            });
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

export  const UserProfileContainer = connect(mapStateToProps, {setUserProfile} )(WithRouterUserProfileContainerAPI);