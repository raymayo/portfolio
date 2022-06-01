import React from 'react'
import Back from './Back.js'
import aboutCss from '../Stylesheets/about.module.css'
import { ReactComponent as FB } from '../SVG-Links/fb.svg';
import { ReactComponent as INSTA } from '../SVG-Links/insta.svg';
import { ReactComponent as GIT } from '../SVG-Links/git.svg';
import { ReactComponent as LINKED } from '../SVG-Links/linkedin.svg';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const About = () => {

    const rightBox = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1, transition: { staggerChildren: 0.1 }
        },
        exit: { transition: { staggerChildren: 0.1, staggerDirection: -1, ease: 'easeOut', type: 'spring' } }
    }

    const leftBox = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1, transition: { staggerChildren: 0.1 }
        },
        exit: { transition: { staggerChildren: 0.1, staggerDirection: -1, ease: 'easeOut', type: 'spring' } }
    }

    const animation = {
        hidden: { opacity: 0, x: -50 },
        show: { opacity: 1, x: 0, transition: { ease: 'easeInOut' } },
        exit: { opacity: 0, x: 50, transition: { ease: 'easeInOut' } }
    }
    return (
        <motion.div id={aboutCss.aboutContainer}>
            <div id={aboutCss.content}>
                <motion.div id={aboutCss.leftContainer} variants={rightBox} initial='hidden' animate='show' exit='exit'>
                    <div id={aboutCss.infoBox}>
                        <div id={aboutCss.titleContainer}>
                            <motion.h1 variants={animation}>RAY</motion.h1>
                            <motion.h1 variants={animation}>MAYO</motion.h1>
                        </div>
                        <div id={aboutCss.descBox}>
                            <motion.h1 variants={animation}>I'm a 20 y/o self-taught graphic designer and front end developer based in the Philippines.</motion.h1>
                        </div>
                        <motion.div id={aboutCss.linkContainer} variants={animation}>
                            <FB className={aboutCss.svgLink} />
                            <INSTA className={aboutCss.svgLink} />
                            <GIT className={aboutCss.svgLink} />
                            <LINKED className={aboutCss.svgLink} />
                        </motion.div>
                    </div>
                </motion.div>


                <motion.div id={aboutCss.rightContainer} variants={rightBox} initial='hidden' animate='show' exit='exit'>
                    <div id={aboutCss.skillBox}>
                        <motion.h1 id={aboutCss.toolsTitle} variants={animation}>Tools I Use:</motion.h1>
                        <div className={aboutCss.skillsTable}>
                            <motion.div className={aboutCss.skillsTitle} variants={animation}>
                                <h1 >Design Tools</h1>
                                <h1>01</h1>
                            </motion.div>
                            <motion.div className={aboutCss.list} variants={animation}>
                                <h4>Photoshop · Illustrator · Adobe XD · Figma · After Effects · Premiere Pro · Canva · InDesign</h4>
                            </motion.div>
                        </div>

                        <div className={aboutCss.skillsTable}>
                            <motion.div className={aboutCss.skillsTitle} variants={animation}>
                                <h1>Web Dev Tools</h1>
                                <h1>02</h1>
                            </motion.div>
                            <div className={aboutCss.list}>
                                <motion.h4 variants={animation}>HTML5 · CSS · JavaScript · React Js · Node Js · PHP · Wordpress · Python · Django · MongoDB · SQL</motion.h4>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <Back />
            </motion.div>
        </motion.div >
    )
}

export default About