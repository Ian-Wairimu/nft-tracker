import React from "react"
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/market price">
                            Market Price
                        </Link>
                    </li>
                    <li>
                        <Link to="/nft">
                            NFTs
                        </Link>
                    </li>
                    <li>
                        <Link to="/news">
                            News
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;

