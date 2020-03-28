import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from '../Components/Navbar/navbar';
import SideDrawer from '../Components/SideDrawer/sideDrawer';
import Backdrop from '../Components/Backdrop/backdrop';



export default class AppRoute extends Component {
    state={
        sideDrawerOpen:false
    };

    drawerToggleClickHandler=()=>{
        this.setState((prevState)=>{
            return{sideDrawerOpen:!prevState.sideDrawerOpen}
        })
    }
    render() {
        let sideDrawer;
        let backdrop;

        if(this.state.sideDrawerOpen){
            sideDrawer=<SideDrawer></SideDrawer>
            backdrop=<Backdrop></Backdrop>
        }

        return (
            <div>
                <Navbar drawerToggleClickHandler={this.drawerToggleClickHandler}></Navbar>
                {sideDrawer}
                {backdrop}
            </div>
        )
    }
}


