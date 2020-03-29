import React from 'react';


import './navbar.css'
import ToggleButtton from '../SideDrawer/drawerToggleButton';

export const Navbar = (props) => {

    return (
        <header className="nav">
            <nav className="navigation-bar">
                <ToggleButtton click={props.drawerToggleClickHandler}></ToggleButtton>
                <div className="navigation-bar-logo"><a href="#Home"> THE LOGo</a> </div>
                <div className="spacer"></div>
                <div className="navigation-item">
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
