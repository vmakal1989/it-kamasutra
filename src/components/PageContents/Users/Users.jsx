import React from 'react';
import  s from './Users.module.css'

const Users = (props) => {
    return (
        <div className={s.page}>
            {
                props.users.map ( u =>
                    <div key={u.id} className={s.userBlock}>
                    <div className={s.photoUrl}>
                        <img src={u.photoUrl}/>
                    </div>
                        <button className={s.button}
                                onClick={()=> u.followed == true ? props.UNFOLLOW(u.id) : props.FOLLOW(u.id)}>
                                {u.followed == true ? 'UNFOLLOW' : 'FOLLOW'}
                        </button>
                    <div className={s.title}>title</div>
                    <div className={s.country}>Country:</div>
                    <div className={s.city}>City: {u.city}</div>
                    </div>
                )
            }
        </div>
    )
};

export default Users;