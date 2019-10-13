import React from 'react';
import style from './Header.module.css';

const Header = () => {
    return (
      <header className={style.header}>
        <img src="https://sap.github.io/ui5-webcomponents/images/react.svg"/>
      </header>
    )
}

export default Header;