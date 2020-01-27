import React from 'react';
import style from '../Navbar.module.css';
import {NavLink} from "react-router-dom";

const LinksMenu = () => {
    return (
        <div className={style.navUp}>
            <div className={style.item}>
                <NavLink to='/' activeClassName={style.active}>My Page</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/dialogs' activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/news' activeClassName={style.active}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
            </div>
        </div>
    )

}

export default LinksMenu;