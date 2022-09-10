import React from "react";
import Footer from "./footer/Footer";
import Navigation from "./Navigation/Navigation";
import Intro from "./Intro/Intro";
import History from "./History/History";
import Marketprice from "./Marketprice/Marketprice";
import CoinSearch from "./CoinSearch/CoinSearch";

const App = () => {
    return (
        <div className="App">
            <Navigation/>
            <Intro/>
            <History/>
            <Marketprice/>
            <CoinSearch/>
           
           
        </div>
    )
}

export default App;