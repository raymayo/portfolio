import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import browseCss from '../Stylesheets/browse.module.css'

const Browse = () => {

    const browseBox = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1, transition: {
                staggerChildren: 0.1
            }
        }
    }

    const links = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0, transition: { ease: 'easeInOut' } }
    }
    return (
        <div id={browseCss.tabContainer}>
            <div id={browseCss.browseContainer}>
                <motion.div className={browseCss.linkContainer} variants={browseBox} initial={'hidden'} animate={'show'}>

                    <motion.div className={browseCss.inlineLink} variants={links}>
                        <Link to="/works">
                            <h1>WORKS</h1>
                        </Link><span>(01)</span>

                    </motion.div>
                    <motion.div className={browseCss.inlineLink} variants={links}>
                        <Link to="/about">
                            <h1>ABOUT</h1>
                        </Link><span>(02)</span>
                    </motion.div>
                    <motion.div className={browseCss.inlineLink} variants={links}>
                        <Link to="/social">
                            <h1>SOCIALS</h1>
                        </Link><span>(03)</span>
                    </motion.div>
                    <motion.div className={browseCss.inlineLink} variants={links}>
                        <Link to="/contact">
                            <h1>CONTACT</h1>
                        </Link><span>(04)</span>
                    </motion.div>
                </motion.div>
            </div>
            <div id={browseCss.exit}>
                <h1><Link to="/portfolio">EXIT</Link></h1>
            </div>
        </div>
    )
}

export default Browse;