import React from "react";
import HeaderImg from "../HeaderImage/HeaderImg";
import "./headercomponent.css";

export const News = () => {
    const dashboardData = [
        {
            classNameDiv: "header--img news",
            classNameH1: "h1--con",
            name: "Get the latest news with us",
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