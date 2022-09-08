import React from 'react'
import Logo from "../../images/Logo.png";
import './Navigation.css';
import Notification from "../../images/Notification.png";
import background from "../../images/background.png";
import Button from "../Button/Button";

const Navigation = () => {
    const btnObject = [
        {
            name: "Connect Wallet",
            className: "connect--btn"
        }
    ]
    return(
        <>
            <div className="nav--con">
                <div className="logo--con">
                    <img src={Logo} alt="page logo" className="nav--logo" />
                </div>
                 <nav>
                     {
                         btnObject.map((v, i) => {
                             return <Button nameBtn={v.name} className={v.className} />
                         })
                     }
                     <Button />
                     <img src={Notification} alt="notification icon"/>
                 </nav>
            </div>
        </>
    )
}

export default Navigation;