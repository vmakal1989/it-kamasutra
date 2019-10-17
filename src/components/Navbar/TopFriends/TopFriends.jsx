import React from 'react';
import style from "../Navbar.module.css";

const TopFriends = (props) => {
    return (
        <div>
            <img src={props.image}/>
        </div>
    )
}

export default TopFriends;