import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {loginOut} from "../../Redux/login-reducer";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export default connect(mapStateToProps, {loginOut})(HeaderContainer)