import React from "react";
import HeaderImg from "../HeaderImage/HeaderImg";
import "./headercomponent.css";

export const MarketPrice = () => {
    const dashboardData = [
        {
            classNameDiv: "header--img marketPrice",
            classNameH1: "h1--con",
            name: "Study the market price with us",
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