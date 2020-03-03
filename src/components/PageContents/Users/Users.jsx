import React from 'react';
import s from "./Users.module.css";
import defaultAvatar from "../../../assets/image/user.png";

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