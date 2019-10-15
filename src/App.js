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


const App = () => {
  return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div>
              <Route path='/' exact component={PageContents}/>
              <Route path='/profile' component={PageContents}/>
              <Route path='/dialogs' component={Dialogs}/>
              <Route path='/news' component={News}/>
              <Route path='/music' component={Music}/>
              <Route path='/settings' component={Settings}/>
          </div>
          <Profile />
        </div>
      </BrowserRouter>
  );
}


export default App;
