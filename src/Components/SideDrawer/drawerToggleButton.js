import React from 'react';
import './drawerToggleButton.css'

const ToggleButtton = (props)=>{
    return(
        <button className="toggle-button" onClick={props.click}>
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
            <div className="toggle-button-line"></div>
        </button>
    )
}

export default ToggleButtton;