import React, {Component, Suspense} from 'react';
import './App.css';
import PageContents from './components/PageContents/PageContents';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import  {UserProfileContainer} from './components/PageContents/Users/UserProfile/UserProfileContainer'
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import ProfileContainer from "./components/Profile/ProfileContainer";
import store from "./Redux/storeRedux";

const DialogsContainer = React.lazy(() => import("./components/Navbar/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import("./components/PageContents/Users/UsersContainer"));

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
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Route path='/users' exact render={() => <UsersContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    </Suspense>
                    <Route path='/' exact render={() => <PageContents/>}/>
                    <Route path='/users/:userId' render={() => <UserProfileContainer/>}/>
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

let AppContainer =  compose( withRouter,
                        connect( mapStateToProps,{initializeApp})
                      )(App);
const MainApp = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
};

export default  MainApp;