import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuth
    }
};

export const AuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.auth) return <Redirect to={'/login'}/>;
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthRedirect = connect(mapStateToProps)(RedirectComponent);

    return ConnectedAuthRedirect;
};


