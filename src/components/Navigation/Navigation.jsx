import React from 'react'
import Logo from "../../images/Logo.png";
import './Navigation.css';
import Notification from "../../images/Notification.png";
import background from "../../images/background.png";
// import {MdNotificationsNone} from "react-icons/md";

function Navigation() {
  return (
    <div className='navbar'>
<div className='logo'>
    <img src={Logo}></img>
 
    
</div>
<div className='button-nav'>
<button type='button' className="nav-button">Connect Wallet</button>
</div>
<div className='notification-icon'>
<img src={Notification}></img>
</div>


    </div>
  )
}

export default Navigation