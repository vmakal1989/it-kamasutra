import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import UserMenu from './components/UserMenu';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <Profile/>
      <UserMenu/>
    </div>
  );
}


export default App;
