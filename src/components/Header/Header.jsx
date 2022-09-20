import React from "react"
import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <>
            <nav className="header--nav">
                <ul className="header--items">
                    <li>
                        <Link to="/dashboard" className="header--link">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/market price" className="header--link">
                            Market Price
                        </Link>
                    </li>
                    <li>
                        <Link to="/nft" className="header--link">
                            NFTs
                        </Link>
                    </li>
                    <li>
                        <Link to="/news" className="header--link">
                            News
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;

