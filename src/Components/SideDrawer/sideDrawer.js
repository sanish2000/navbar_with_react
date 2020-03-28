import React from 'react';
import './sideDrawer.css'


const SideDrawer=(props)=>{
    return(
        <nav className="sideDrawer">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default SideDrawer;