import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import navCss from '../Stylesheets/navBar.module.css'
import { ReactComponent as Logo } from '../logo.svg';

const Navbar = () => {
    return (
        <motion.div id={navCss.headerContainer} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'spring', ease: 'easeInOut' }}>
            <Link id={navCss.logoLink} to="/portfolio">
                <Logo id={navCss.Logo} />
            </Link>
            <a href="RayMayo-Resume.png" id={navCss.resume} className={navCss.download} download>RESUME</a>
        </motion.div>
    )
}

export default Navbar