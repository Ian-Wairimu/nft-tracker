import React from "react";

const HeaderImg = ({headerImgCon, headerCon, headerImgContent}) => {
    return (
        <>
            <div className={headerImgCon}>
                <h1 className={headerCon}>{headerImgContent}</h1>
            </div>
        </>
    )
}

export default HeaderImg;