import React from 'react'
import { Link } from 'react-router-dom'
import navCss from '../Stylesheets/navBar.module.css'

const Navbar = () => {
    return (
        <div id={navCss.headerContainer}>
            <Link id={navCss.logoLink} to="/">
                <img id={navCss.Logo} src="Logo.svg" alt="Logo" /></Link>
            <a href="RayMayo-Resume.png" id={navCss.resume} className={navCss.download} download>RESUME</a>
        </div>
    )
}

export default Navbar