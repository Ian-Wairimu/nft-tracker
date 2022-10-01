import React from "react";
import {Graph} from "../../Graph/Graph";
import {TotalBalance} from "../../Balance/TotalBalance";
import "./dash.css";

export const DashboardComp = () => {
    return (
        <>
            <div className="dash--cont">
                <Graph />
                <TotalBalance />
            </div>
        </>
    )
}