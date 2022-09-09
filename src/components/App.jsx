import React from "react";
import Footer from "./footer/Footer";
import Navigation from "./Navigation/Navigation";
import Intro from "./Intro/Intro";
import History from "./History/History";

const App = () => {
    return (
        <div className="App">
            <Navigation/>
            <Intro/>
            <History/>
           
        </div>
    )
}

export default App;