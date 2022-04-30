import React from 'react'
import Back from './Back.js'
import aboutCss from '../Stylesheets/about.module.css'

const About = () => {
    return (
        <div id={aboutCss.aboutContainer}>
            <div id="intro">
                <h1>I’m Ray Mayo</h1>
                <h1>A 20 y/o self-taught graphic designer *slash* front end developer based in the Philippines.</h1>
            </div>
            <div id="skillsContainer">
                <div id="graphicSkills"></div>
                <div id="webSkills"></div>
            </div>
            <Back />
        </div>
    )
}

export default About