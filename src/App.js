import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import UserMenu from './components/UserMenu/UserMenu';
import Dialogs from './components/Dialogs/Dialogs'


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
      <UserMenu />
    </div>
  );
}


export default App;
