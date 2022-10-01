import React from "react";
import HeaderImg from "../HeaderImage/HeaderImg";
import "./headercomponent.css";

export const Dashboard = () => {
    const dashboardData = [
        {
            classNameDiv: "header--img dashboard",
            classNameH1: "h1--con",
            name: "Track and manage your portfolio",
        }
    ]
    return (
        <>
            {
                dashboardData.map((v, i) => {
                    return <HeaderImg key={i} headerImgCon={v.classNameDiv} headerCon={v.classNameH1} headerImgContent={v.name} />
                })
            }
        </>
    )
}