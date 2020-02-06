import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import PageContents from './components/PageContents/PageContents';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import DialogsContainer from "./components/Navbar/Dialogs/DialogsContainer";

const App = (props) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <Navbar state={props.store.getState()}/>
                <div>
                    <Route path='/' exact render={ () => <PageContents store={props.store}/>}/>
                    <Route path='/dialogs' render={ () => <DialogsContainer store={props.store}/>} />
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                <Profile/>
            </div>
    );
}


export default App;
