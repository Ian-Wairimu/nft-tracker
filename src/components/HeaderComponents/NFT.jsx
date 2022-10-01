import React from "react";
import HeaderImg from "../HeaderImage/HeaderImg";
import "./headercomponent.css";

export const NFT = () => {
    const dashboardData = [
        {
            classNameDiv: "header--img nft",
            classNameH1: "h1--con",
            name: "Borrow / buy NFTs of your choice",
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