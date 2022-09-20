import React, {useEffect, useState} from "react";
import Footer from "../components/footer/Footer";
import Navigation from "./Navigation/Navigation";
import History from "./History/History";
import Marketprice from "./Marketprice/Marketprice";
import CoinSearch from "./CoinSearch/CoinSearch";
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
                    <History/>
                    <Marketprice/>
                    <CoinSearch/> 
                    <Footer/>
                </div>
            )}
        </>

    )
}

export default App;