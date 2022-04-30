import React from 'react'
import { Link } from 'react-router-dom'
import navCss from '../Stylesheets/navBar.module.css'
import Logo from '../logo.svg';

const Navbar = () => {
    return (
        <div id={navCss.headerContainer}>
            <Link id={navCss.logoLink} to="/deploy">
                <img id={navCss.Logo} src={Logo} alt="" /></Link>
            <a href="RayMayo-Resume.png" id={navCss.resume} className={navCss.download} download>RESUME</a>
        </div>
    )
}

export default Navbar