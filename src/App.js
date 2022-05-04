import React, { useState, useEffect } from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Browse from './Components/Browse';
import About from './Components/About';
import Works from './Components/Works';
import Socials from './Components/Socials';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";




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
        }, 3000)
    }, []);

    return (
        <BrowserRouter>
            <div id="webContainer">
                {
                    loading ?
                        <div>loading</div>
                        :
                        <div id="appContainer">
                            <Navbar />
                            <Routes>
                                <Route path="/portfolio" element={<Home />} />
                                <Route path="/browse" element={<Browse />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/work" element={<Works />} />
                                <Route path="/social" element={<Socials />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </div>
                }
            </div>
        </BrowserRouter>

    );
}