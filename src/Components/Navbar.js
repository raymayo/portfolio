import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import navCss from '../Stylesheets/navBar.module.css';
import { ReactComponent as Logo } from '../logo.svg';
import { saveAs } from 'file-saver';



const Navbar = () => {

    const downloadImage = () => {
        saveAs('https://i.ibb.co/1bM8qqN/Ray-Mayo-Resume.jpg', 'Ray-Mayo-Resume.jpg')
    }

    return (
        <motion.div id={navCss.headerContainer} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: 'spring', ease: 'easeInOut' }}>
            <Link id={navCss.logoLink} to="/portfolio">
                <Logo id={navCss.Logo} />
            </Link>
            <span id={navCss.resume} className={navCss.download} onClick={downloadImage}>RESUME</span>
        </motion.div>
    )
}

export default Navbar