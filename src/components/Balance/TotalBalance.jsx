import React from "react";
import "./totalBalance.css";
import Profile from "../../images/profile.png"

export const TotalBalance = () => {
    return (
        <>
            <div className="balance--con">
                <div>
                    <img src={Profile} alt="user profile" className="user--profile"/>
                </div>
                <div>
                    <h1 className="h1--name">_Darshy</h1>
                </div>
                <div>
                <h2 className="balance--header">Total Balance</h2>
                <span className="balance--value">$400</span>
                </div>
            </div>
        </>
    );
}
