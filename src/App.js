import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Browse from './Components/Browse';
import About from './Components/About';
import Works from './Components/Works';
import Socials from './Components/Socials';
import Contact from './Components/Contact';
import { BrowserRouter, Route, Routes } from "react-router-dom";




export default function App() {
    return (
        <BrowserRouter>
            <div id="webContainer">
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
            </div>
        </BrowserRouter>

    );
}