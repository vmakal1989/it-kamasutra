import React from 'react';
import {connect} from "react-redux";
import UserProfile from "./UserProfile";
import {setUserProfile} from "../../../../Redux/pageContentsReducers/userProfileReducer";
import * as axios from "axios";

class UserProfileContainerAPI extends React.Component   {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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




export  const UserProfileContainer = connect(mapStateToProps, {setUserProfile} )(UserProfileContainerAPI);