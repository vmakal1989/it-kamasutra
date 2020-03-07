import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData} from "../../Redux/headerReducers/authReducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthData(id, login, email)
                }
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login:state.auth.login
    }
};

export default connect(mapStateToProps, {setAuthData})(HeaderContainer)