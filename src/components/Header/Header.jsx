import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
      <header className={style.header}>
        <img src="http://weblab.ua/wp-content/uploads/2017/08/react-learning.png"/>
        <div className={style.authUser}>
            <NavLink to={'/login'}>login</NavLink>
        </div>
      </header>
    )
};

export default Header;