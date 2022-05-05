import React from 'react'
import { Link } from 'react-router-dom'
import navCss from '../Stylesheets/navBar.module.css'
import { ReactComponent as Logo } from '../logo.svg';

const Navbar = () => {
    return (
        <div id={navCss.headerContainer}>
            <Link id={navCss.logoLink} to="/portfolio">
                <Logo id={navCss.Logo} />
            </Link>
            <a href="RayMayo-Resume.png" id={navCss.resume} className={navCss.download} download>RESUME</a>
        </div>
    )
}

export default Navbar