import React from "react";
import "./Footer.css";
import {Link} from "react-router-dom";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="ft-con-main">
                <section className="ft-sec">
                    <h2 className="ft-sec-h1">QUICK LINKS</h2>
                    <nav className="ft-nav">
                        <ul className="ft-nav-items">
                            <li className="ft-nav-lists">
                                <Link to="/dashboard" className="ft-nav-links">
                                    Dashboard
                                </Link>
                            </li>
                            <li className="ft-nav-lists">
                                <Link to="/market" className="ft-nav-links">
                                    Market prices
                                </Link>
                            </li>
                            <li className="ft-nav-lists">
                                <Link to="/nft" className="ft-nav-links">
                                    NFTs
                                </Link>
                            </li>
                            <li className="ft-nav-lists">
                                <Link to="/overview" className="ft-nav-links">
                                    Overview
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section className="ft-sec">
                    <h2 className="ft-sec-h1">QUICK LINKS</h2>
                    <nav className="ft-nav">
                        <ul className="ft-nav-items">
                            <li className="ft-nav-lists">
                                <Link to="/profile" className="ft-nav-links">
                                    My profile
                                </Link>
                            </li>
                            <li className="ft-nav-lists">
                                <Link to="/notifications" className="ft-nav-links">
                                    Notifications
                                </Link>
                            </li>
                            <li className="ft-nav-lists">
                                <Link to="/settings" className="ft-nav-links">
                                    Settings
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section className="ft-sec">
                    <h2 className="ft-sec-h1">RESOURCES</h2>
                    <nav className="ft-nav">
                        <ul className="ft-nav-items">
                            <li className="ft-nav-lists">
                                <Link to="/connect-wallet" className="ft-nav-links">
                                    Connect wallet
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
                <section className="ft-sec tracker">
                    {/*<span className="ft-logo"></span>*/}
                    <h2 className="ft-sec-h1">Tracker</h2>
                    <p className="ft-p">TrustTracker provides a fundamental analysis of the crypto market. In addition to tracking prices, volume and market capitalization</p>
                    <div className="ft-brand-logo">
                        <span className="ft-icon-con">
                            <FaFacebookF />
                        </span>
                        <span className="ft-icon-con">
                            <FaTwitter />
                        </span>
                        <span className="ft-icon-con">
                            <FaInstagram />
                        </span>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer;