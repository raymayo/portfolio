import React from 'react'
import Back from './Back.js'
import aboutCss from '../Stylesheets/about.module.css'

const About = () => {
    return (
        <div id={aboutCss.aboutContainer}>
            <div id={aboutCss.content}>
                <div id={aboutCss.intro}>
                    <h1>I’m <b>Ray Mayo</b></h1>
                    <h2>A 20 y/o self-taught graphic designer *slash* front end developer based in the Philippines.</h2>
                </div>
                <div id={aboutCss.skillsContainer}>
                    <div className={aboutCss.skillsTable}>
                        <h1 className={aboutCss.title}>Design Tools</h1>
                        <div className={aboutCss.list}>
                            <ul>Skills</ul>
                            <ul>Skills</ul>
                            <ul>Skills</ul>
                        </div>
                    </div>
                    <div className={aboutCss.skillsTable}>
                        <h1 className={aboutCss.title}>Web Dev Tools</h1>
                        <div className={aboutCss.list}>
                            <ul>Skills</ul>
                            <ul>Skills</ul>
                            <ul>Skills</ul>
                        </div>
                    </div>
                </div>
            </div>
            <Back />
        </div>
    )
}

export default About