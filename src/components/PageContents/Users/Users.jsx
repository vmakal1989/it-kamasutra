import React from 'react';
import  s from './Users.module.css';
import * as axios from 'axios';
import defaultAvatar from '../../../assets/image/user.png'

const Users = (props) => {
    if (props.users.length === 0 ) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then( response => {
                props.SET_USERS(response.data.items);
            })
    }
    return (
        <div className={s.page}>
            {
                props.users.map ( u =>
                    <div key={u.id} className={s.userBlock}>
                    <div className={s.photoUrl}>
                        <img src={ u.photos.small != null ?  u.photos.small : defaultAvatar}/>
                    </div>
                        <button className={s.button}
                                onClick={()=> u.followed == true ? props.UNFOLLOW(u.id) : props.FOLLOW(u.id)}>
                                {u.followed == true ? 'UNFOLLOW' : 'FOLLOW'}
                        </button>
                    <div className={s.title}>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div className={s.country}></div>
                    <div className={s.city}></div>
                    </div>
                )
            }
        </div>
    )
};

export default Users;