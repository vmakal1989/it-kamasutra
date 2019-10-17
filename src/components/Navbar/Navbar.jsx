import React from 'react';
import style from './Navbar.module.css';
import TopFriends from './TopFriends/TopFriends';
import LinksMenu from './LinksMenu/linksMenu';

const Navbar = (props) => {

    let topFriends = props.topFriends.friends.map( f => <TopFriends image={f.image}/>);

    return (
        <nav className={style.nav}>
            <LinksMenu />
            <div className={style.navDown}>
                <h3>Top Friends</h3>
                <div className={style.blockImage}>
                    {topFriends}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;