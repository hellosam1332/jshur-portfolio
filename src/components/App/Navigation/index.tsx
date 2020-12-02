import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import './navigation.scss'
import {RootContext, RootContextProps} from "../index";



const Navigation = () => {
    let {appTheme, toggleTheme} = useContext(RootContext);
    const changeThemeBtn = (
        appTheme === "dark" ? <i className="far fa-sun"><span>Too dark?</span></i>
            : <i className="far fa-moon"><span>Too bright?</span></i>
    )

    return (
        <div className='nav'>
            <div className="nav-logo">
                <Link to='/'><div className='logo-profile'/></Link>
            </div>
            <div className='nav-items'>
                <ul className='flex-row'>
                    <li><Link to='/about'><span>About</span></Link></li>
                    <li><Link to='/works'>Works</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div className="ect-features flex-row">
                <div className='theme-change-btn' onClick={toggleTheme}>{changeThemeBtn}</div>
            </div>
        </div>
    )
}

export default Navigation;