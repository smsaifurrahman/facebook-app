import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (

        <div className="header">
            <img src={logo} alt="" />
            <nav >
                <a href="/friends">Friends</a>
                <a href="New People">New People</a>
                <a href="People know">People you may know</a>
            </nav>
        </div>

    );
};

export default Header;