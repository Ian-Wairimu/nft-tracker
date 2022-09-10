import React, {useEffect, useState} from "react";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
import {HashLoader} from "react-spinners";
import "./App.css";
import Header from "./Header/Header";

const App = () => {
    const[loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, []);
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
                    <Header />  
                    <Footer />
                </div>
            )}
        </>
    )
}

export default App;