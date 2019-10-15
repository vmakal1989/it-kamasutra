import React from 'react';
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={style.dialogsBody}>
            <div className={style.dialogs}>
                <div>
                    <NavLink to='/dialogs/id1' activeClassName={style.active}>Artur</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs/id2' activeClassName={style.active}>Valera</NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs/id3' activeClassName={style.active}>Kristina</NavLink>
                </div>
            </div>
            <div className={style.comments}>
              Messages
            </div>
        </div>
    )
}

export default Dialogs;