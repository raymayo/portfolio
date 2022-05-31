import React from 'react'
import Back from './Back.js'
import aboutCss from '../Stylesheets/about.module.css'
import { ReactComponent as FB } from '../SVG-Links/fb.svg';
import { ReactComponent as INSTA } from '../SVG-Links/insta.svg';
import { ReactComponent as GIT } from '../SVG-Links/git.svg';
import { ReactComponent as LINKED } from '../SVG-Links/linkedin.svg';

const About = () => {
    return (
        <div id={aboutCss.aboutContainer}>

            <div id={aboutCss.content}>

                <div id={aboutCss.leftContainer}>
                    <div id={aboutCss.infoBox}>
                        <div id={aboutCss.titleContainer}>
                            <h1>RAY</h1>
                            <h1>MAYO</h1>
                        </div>
                        <div id={aboutCss.descBox}>
                            <h1>I'm a 20 y/o self-taught graphic designer and front end developer based in the Philippines.</h1>
                        </div>
                        <div id={aboutCss.linkContainer}>
                            <FB className={aboutCss.svgLink} />
                            <INSTA className={aboutCss.svgLink} />
                            <GIT className={aboutCss.svgLink} />
                            <LINKED className={aboutCss.svgLink} />
                        </div>
                    </div>
                </div>


                <div id={aboutCss.rightContainer}>
                    <div id={aboutCss.skillBox}>
                        <h1 id={aboutCss.toolsTitle}>Tools I Use:</h1>
                        <div className={aboutCss.skillsTable}>
                            <div className={aboutCss.skillsTitle}>
                                <h1 >Design Tools</h1>
                                <h1>01</h1>
                            </div>
                            <div className={aboutCss.list}>
                                <h4>Photoshop · Illustrator · Adobe XD · Figma · After Effects · Premiere Pro · Canva · InDesign</h4>
                            </div>
                        </div>

                        <div className={aboutCss.skillsTable}>
                            <div className={aboutCss.skillsTitle}>
                                <h1>Web Dev Tools</h1>
                                <h1>02</h1>
                            </div>
                            <div className={aboutCss.list}>
                                <h4>HTML5 · CSS · JavaScript · React Js · Node Js · PHP · Wordpress · Python · Django · MongoDB · SQL</h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Back />
        </div >
    )
}

export default About