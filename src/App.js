import React, {Component} from 'react';
import './App.css';
import PageContents from './components/PageContents/PageContents';
import {Route, withRouter} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/PageContents/Users/UsersContainer";
import  {UserProfileContainer} from './components/PageContents/Users/UserProfile/UserProfileContainer'
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import ProfileContainer from "./components/Profile/ProfileContainer";

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()

    }
    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div>
                    <Route path='/' exact render={() => <PageContents/>}/>
                    <Route path='/users' exact render={() => <UsersContainer/>}/>
                    <Route path='/users/:userId' render={() => <UserProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' component={Login}/>
                </div>
                <ProfileContainer/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose( withRouter,
                        connect( mapStateToProps,{initializeApp, })
                      )(App);
