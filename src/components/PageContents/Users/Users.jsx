import React from 'react';
import  s from './Users.module.css';
import * as axios from 'axios';
import defaultAvatar from '../../../assets/image/user.png'

class Users extends React.Component {

    constructor (props) {

        super(props);

        axios.get("https://node-js-api-for-it-kamasuntra.herokuapp.com/users")
            .then(response => {
                this.props.SET_USERS(response.data.items);
            });
    }

    render() {
        return (
            <div className={s.page}>
                {
                    this.props.users.map ( u =>
                        <div key={u.id} className={s.userBlock}>
                        <div className={s.photoUrl}>
                            <img src={ u.photos.small != null ?  u.photos.small : defaultAvatar}/>
                        </div>
                            <button className={s.button}
                                    onClick={()=> u.followed == true ? this.props.UNFOLLOW(u.id) : this.props.FOLLOW(u.id)}>
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
    }
}

export default Users;