import React from 'react'
import Logo from "../../images/Logo.png";
import './Navigation.css';
import Notification from "../../images/Notification.png";
import Button from "../Button/Button";
import {Link} from "react-router-dom";

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
                 <nav className="navigation">
                     <ul>
                         <li>
                             <Link to="/connect wallet"></Link>
                             {
                                 btnObject.map((v, i) => {
                                     return <Button key={i} nameBtn={v.name} className={v.className} />
                                 })
                             }
                         </li>
                         <li>
                             <Link to="/notification">
                                 <img src={Notification} alt="notification icon" className="notification-icon"/>
                             </Link>
                         </li>
                         {/*<li>*/}
                         {/*    <Link to="/connect wallet"></Link>*/}
                         {/*</li>*/}
                     </ul>
                 </nav>
            </div>
        </>
    )
}

export default Navigation;