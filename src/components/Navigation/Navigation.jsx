import React, {useEffect, useState} from 'react'
import Logo from "../../images/Logo.png";
import './Navigation.css';
import Notification from "../../images/Notification.png";
import Button from "../Button/Button";
import {Link} from "react-router-dom";

const Navigation = () => {
    // state variable used to store our user public wallet
    const[currentAccount, setCurrentAccount] = useState("");
    const checkIfWalletIsConnected = async () => {
        try {
            const { ethereum } = window;
            if(!ethereum) {
                console.log("Make sure you have meta mask installed");
            }else {
                console.log("We have the ethereum object", ethereum);
            }
            // check if we are authorized to access the users wallet
            const accounts = await ethereum.request({method: "eth_accounts"})
            if(accounts.length !== 0){
                const account = accounts[0]
                console.log("found an authorized account: ", account);
                setCurrentAccount(account);
            }else {
                console.log("no authorized accounts were found");
            }
        }catch (e) {
            console.log(e.message());
        }
    };
    const connectWallet = async () => {
        try {
            const {ethereum} = window;
            if(!ethereum){
                console.log("get metamask")
            }
            const accounts = await ethereum.request({method: "eth_requestAccounts"});
            console.log("connected", accounts[0]);
            setCurrentAccount(accounts[0]);
        }catch (e) {
            console.log(e.message());
        }
    };
    useEffect(() => {
        checkIfWalletIsConnected()
    }, [])
    return(
        <>
            <div className="nav--con">
                <div className="logo--con">
                    <img src={Logo} alt="page logo" className="nav--logo" />
                </div>
                 <nav className="navigation">
                     <ul>
                         <li>
                             <Link to="/connect wallet">
                             {!currentAccount && (
                                 <Button nameBtn="Connect Wallet" className="connect--btn" click={connectWallet()}/>
                             )
                             }
                             </Link>
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