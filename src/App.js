import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import PageContents from './components/PageContents/PageContents';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/PageContents/Users/UsersContainer";
import  {UserProfileContainer} from './components/PageContents/Users/UserProfile/UserProfileContainer'

const App = () => {
    return (
            <div className="app-wrapper">
                <Header />
                <NavbarContainer />
                <div>
                    <Route path='/' exact render={ () => <PageContents />}/>
                    <Route path='/users'  exact render={ () => <UsersContainer />} />
                    <Route path='/users/:userId' render={ () => <UserProfileContainer />} />
                    <Route path='/dialogs' render={ () => <DialogsContainer />} />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                <Profile/>
            </div>
    );
}


export default App;
