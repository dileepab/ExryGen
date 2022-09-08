import React from 'react';
import './Header.scss';
import search from '../../img/search.svg'
import logo from '../../img/logo-mobile.png'
import Navigations from "../Navigation/Navigations";

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <span className='hideOnMobile'>LOGO</span>
                <img className='hideOnDesktop' src={logo} alt={'logo'}/>
            </div>
            <nav className='hideOnMobile'>
                <Navigations/>
            </nav>
            <img src={search} className="search hideOnMobile" alt="search" />
            <div className='menu-mobile hideOnDesktop'>
                <span className='line'/>
                <span className='line'/>
                <span className='line'/>
            </div>
        </header>
    )
}

export default Header;