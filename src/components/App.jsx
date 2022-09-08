import React, {useEffect, useState} from "react";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
import Intro from "./Intro/Intro";
import {HashLoader} from "react-spinners";
import "./App.css";

const App = () => {
    const[loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])
    return (
        <>
            {loading ? <span className="loader">
                <HashLoader
                    color="#FF8E00"
                    loading
                    speedMultiplier={1}
                />
            </span> : (
                <div>
                    <Navigation/>
                    <Intro/>
                    <Footer />
                </div>
            )}
        </>
    )
}

export default App;