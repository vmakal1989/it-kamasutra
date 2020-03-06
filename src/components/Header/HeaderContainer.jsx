import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        authDate: state.authDate
    }
};

export default connect(mapStateToProps, {setAuthDate})(HeaderContainer)