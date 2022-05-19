import React from 'react'
import Home from './Components/Home'
import Browse from './Components/Browse';
import About from './Components/About';
import Works from './Components/Works';
import Socials from './Components/Socials';
import Contact from './Components/Contact';
import { AnimatePresence } from 'framer-motion'
import { useLocation, Routes, Route } from 'react-router-dom'

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/portfolio" element={<Home />} />
                <Route path="/browse" element={<Browse />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} />
                <Route path="/social" element={<Socials />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes