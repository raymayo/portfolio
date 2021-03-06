import React from 'react'
import { motion } from 'framer-motion'
import Back from './Back.js'
import designCss from '../Stylesheets/design.module.css'

const Design = () => {

    const workBox = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } },
        exit: { opacity: 1, transition: { staggerChildren: 0.1, staggerDirection: -1, ease: 'easeInOut' } }
    }

    const views = {
        hidden: { opacity: 0, y: -50 },
        show: { opacity: 1, y: 0, transition: { ease: 'easeInOut' }, },
        exit: { opacity: 0, y: -50, transition: { ease: 'easeInOut' } }
    }

    return (
        <div id={designCss.workContainer}>
            <motion.div id={designCss.projectContainer} variants={workBox} initial='hidden' animate='show' exit='exit'>
                <motion.div className={designCss.projBox} variants={views}>
                    <div className={designCss.projTitle}>
                        <h1>Uplifted</h1>
                        <h3>Branding, Marketing</h3>
                    </div>
                    <h1 className={designCss.projNumber}>01</h1>
                </motion.div>
                <motion.div className={designCss.projBox} variants={views}>
                    <div className={designCss.projTitle}>
                        <h1>Graphic Design</h1>
                        <h3>Personal, Experimental</h3>
                    </div>
                    <h1 className={designCss.projNumber}>02</h1>
                </motion.div>
                <motion.div className={designCss.projBox} variants={views}>
                    <div className={designCss.projTitle}>
                        <h1>UI Designs</h1>
                        <h3>Personal, Case Study</h3>
                    </div>
                    <h1 className={designCss.projNumber}>03</h1>
                </motion.div>
                <motion.div className={designCss.projBox} variants={views}>
                    <div className={designCss.projTitle}>
                        <h1>Lorem</h1>
                        <h3>Personal, Branding</h3>
                    </div>
                    <h1 className={designCss.projNumber}>04</h1>
                </motion.div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <Back />
            </motion.div>
        </div>
    )
}

export default Design