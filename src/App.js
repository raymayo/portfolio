import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import AnimatedRoutes from './AnimatedRoutes'
import Loader from './Components/Loader';
import { BrowserRouter } from "react-router-dom";




export default function App() {
    const [loading, setLoading] = useState(false);
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    });

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }, []);

    return (
        <BrowserRouter>
            <div id="webContainer">
                {
                    loading ?
                        <Loader />
                        :
                        <div id="appContainer">
                            <Navbar />
                            <AnimatedRoutes />
                        </div>
                }
            </div>
        </BrowserRouter>

    );
}