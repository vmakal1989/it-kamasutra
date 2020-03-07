import React from 'react';
import s from "./Users.module.css";
import defaultAvatar from "../../../assets/image/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages=[];
    for(let i = 1; pagesCount >= i; i++) {
        pages.push(i);
    }

    return (
        <div className={s.page}>
            <div className={s.pageNumbers}>
                {pages.map( p =>
                    <span className={props.currentPage === p && s.currentPage }
                          onClick = { () => {props.onPageChange(p)} }>{p + ' '}</span>
                )}
            </div>
            {
                props.users.map ( u =>
                    <div key={u.id} className={s.userBlock}>
                        <NavLink to={'/users/' +  u.id}>
                            <div className={s.photoUrl}>
                                <img src={ u.photos.small != null ?  u.photos.small : defaultAvatar}
                                     alt={ u.photos.small != null ?  u.photos.small : defaultAvatar}/>
                            </div>
                        </NavLink>
                        <button className={s.button}
                                onClick={() => u.followed ?
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {withCredentials: true,
                                                headers: {
                                                  "API-KEY": "0cd70b1d-43cd-4ee2-bc8b-48941a6507c9"
                                                }})
                                        .then(response => {
                                            if(response.data.resultCode === 0) {
                                                props.unFollow(u.id)
                                            }
                                        })
                                    :
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {},
                                                { withCredentials: true,
                                                headers: {
                                                    "API-KEY": "0cd70b1d-43cd-4ee2-bc8b-48941a6507c9"
                                                }})
                                        .then(response => {
                                            if(response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })} >
                            {u.followed ? 'UNFOLLOW' : 'FOLLOW'}
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