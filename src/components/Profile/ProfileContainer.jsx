import React from 'react';
import Profile from "./Profile";
import {compose} from "redux";
import {connect} from "react-redux";

const mapStateToProps =(state) => {

    return {
        auth: state.auth
    }
};

class ProfileContainer extends React.Component {

    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
    };

    render () {
        return (
            <Profile {...this.props}
                     editMode={this.state.editMode}
                     activateEditMode={this.activateEditMode}
                     deActivateEditMode={this.deActivateEditMode}/>
        )
    }
};


export default compose(connect(mapStateToProps))(ProfileContainer);
