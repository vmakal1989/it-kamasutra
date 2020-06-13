import s from "./Users.module.css";
import React from 'react'
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../../assets/image/user.png";

const User = (user) => {
    return (
        <div key={user.id} className={s.userBlock}>
            <NavLink to={'/users/' +  user.id}>
                <div className={s.photoUrl}>
                    <img src={ user.photos.small != null ?  user.photos.small : defaultAvatar}
                         alt={ user.photos.small != null ?  user.photos.small : defaultAvatar}/>
                </div>
            </NavLink>
            <button disabled={user.isDisabled.some(id => id === user.id)} className={s.button}
                    onClick={() => user.followed ?
                        user.unFollow(user.id)
                        :
                        user.follow(user.id) } >
                {user.followed ? 'UNFOLLOW' : 'FOLLOW'}
            </button>
            <div className={s.title}>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
            <div className={s.country}></div>
            <div className={s.city}></div>
        </div>
    )
};

export default User;