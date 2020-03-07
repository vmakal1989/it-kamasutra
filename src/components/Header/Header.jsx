import React from 'react';
import style from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    debugger
    return (
      <header className={style.header}>
        <img src="http://weblab.ua/wp-content/uploads/2017/08/react-learning.png"
             alt={"http://weblab.ua/wp-content/uploads/2017/08/react-learning.png"}/>
        <div className={style.authUser}>
            { !props.isAuth ? <NavLink to={'/login'}>login </NavLink> : props.login}
        </div>
      </header>
    )
};

export default Header;