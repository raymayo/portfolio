import React from 'react'
import { Link } from 'react-router-dom'
import homeCss from '../Stylesheets/home.module.css'


const Home = () => {
    return (
        <div id={homeCss.homeContainer}>
            <div id={homeCss.mainContent}>
                <h3 className={homeCss.subtext}>PORTFOLIO-2022</h3>
                <h1 className={homeCss.mainTitle}>RAY</h1>
                <br />
                <h1 className={homeCss.mainTitle}>MAYO</h1>
                <br />
                <h1 className={homeCss.mainTitle}>STUDIO</h1>
                <div id={homeCss.lowerText}>
                    <h3>RAY MAYO</h3>
                    <h3>GRAPHIC DESIGN / WEB DEVELOPMENT</h3>
                </div>
            </div>
            <div id={homeCss.view}>
                <h1><Link to="/browse">VIEW</Link></h1>
            </div>
        </div>
    )
}

export default Home;
