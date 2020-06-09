import React, { useState } from 'react';
import Profile from "./Profile";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfile, getProfileStatus, updateProfileStatus} from "../../Redux/profile-reducer";

const mapStateToProps =(state) => {

    return {
        auth: state.auth,
        profile: state.profile.profile,
        profileStatus: state.profile.profileStatus
    }
};

const ProfileContainer =(props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.profileStatus);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deActivateEditMode = () => {
        setEditMode(false);
        //props.updateProfileStatus(status);
    };

    const onChangeStatus = (e) => {
        setStatus(e.target.value);
    };

return (
    <Profile {...props}
             status = {status}
             editMode = {editMode}
             activateEditMode={activateEditMode}
             deActivateEditMode={deActivateEditMode}
             onChangeStatus={onChangeStatus}/>
 )};



export default compose(connect(mapStateToProps,{getProfile, getProfileStatus, updateProfileStatus}))(ProfileContainer);
