import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import PageContents from './components/PageContents/PageContents';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Navbar/Dialogs/Dialogs'
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";

const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar topFriends={props.state.topFriends}/>
                <div>
                    <Route path='/' exact render={ () => <PageContents posts={props.state.pageContents.posts}/>}/>
                    <Route path='/myPage' exact render={ () => <PageContents posts={props.state.pageContents.posts}
                                                                             addPost={props.addPost}/>}/>
                    <Route path='/dialogs' render={ () => <Dialogs dateDialogs={props.state.dialogsElements}/>} />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                <Profile/>
            </div>
    );
}


export default App;
