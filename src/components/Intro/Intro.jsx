import React from 'react'
import background from "../../images/background.png";
import './Intro.css';

function Intro() {
  return (
    <div cg  vlassName='title'>
        <div className='title1'>
        <h4>Track and Manage your portfolio</h4>
        </div>
        <div className='background'>
    
        <img src={background}></img>
        </div>
      
    </div>


  )
}

export default Intro