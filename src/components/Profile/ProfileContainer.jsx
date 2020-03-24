import React from 'react';
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

class ProfileContainer extends React.Component {
    componentDidUpdate(prevProps, prevState) {
        if(prevProps !== this.props) {
            if (prevProps.auth !== this.props.auth) {
                this.props.getProfile(this.props.auth.userId);
            }
            if(prevProps.profileStatus !== this.profileStatus) {
                this.props.getProfileStatus(this.props.auth.userId);
                this.setState({
                    status: this.props.profileStatus
                })
            }
        }
    }

    state = {
        editMode: false,
        status: this.props.profileStatus
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        if(this.state.status != this.props.profileStatus) {
            this.props.updateProfileStatus(this.state.status)
        }
    };

    onChangeStatus = (e) => {
        this.setState({
            status: e.target.value
        })
    };

    render () {
        return (
            <Profile {...this.props}
                     editMode={this.state.editMode}
                     status={this.state.status}
                     activateEditMode={this.activateEditMode}
                     deActivateEditMode={this.deActivateEditMode}
                     onChangeStatus={this.onChangeStatus}/>
        )
    }
};


export default compose(connect(mapStateToProps,{getProfile, getProfileStatus, updateProfileStatus}))(ProfileContainer);
