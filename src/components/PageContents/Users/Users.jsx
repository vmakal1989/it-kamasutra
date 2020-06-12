import React from 'react';
import s from "./Users.module.css";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return (
        <div className={s.page}>
            <Paginator {...props}/>
            { props.users.map( u => <User {...u} isDisabled={props.isDisabled} unFollow={props.unFollow}
                                          follow={props.follow}/>)}
        </div>
    )
};

export default Users;