import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {authMe} from "../../Redux/headerReducers/auth-reducer";
import {loginOut} from "../../Redux/login-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMe()
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {authMe, loginOut})(HeaderContainer)