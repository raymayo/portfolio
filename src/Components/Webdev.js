import React from 'react'
import Back from './Back'
import { motion } from 'framer-motion'
import webdevCss from '../Stylesheets/webdev.module.css'

const Webdev = () => {

    const webDevBox = {
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
        <div id={webdevCss.webdevContainer}>
            <motion.div id={webdevCss.projectContainer} variants={webDevBox} initial='hidden' animate='show' exit='exit'>
                <motion.div className={webdevCss.projBox} variants={views}>
                    <div className={webdevCss.projTitle}>
                        <h1>Portfolio</h1>
                        <h3>Personal Website</h3>
                    </div>
                    <h1 className={webdevCss.projNumber}>01</h1>
                </motion.div>
                <motion.div className={webdevCss.projBox} variants={views}>
                    <div className={webdevCss.projTitle}>
                        <h1>Trance</h1>
                        <h3>Music Web App</h3>
                    </div>
                    <h1 className={webdevCss.projNumber}>02</h1>
                </motion.div>
                <motion.div className={webdevCss.projBox} variants={views}>
                    <div className={webdevCss.projTitle}>
                        <h1>Quality Control</h1>
                        <h3>Apparel Online Store</h3>
                    </div>
                    <h1 className={webdevCss.projNumber}>03</h1>
                </motion.div>
                <motion.div className={webdevCss.projBox} variants={views}>
                    <div className={webdevCss.projTitle}>
                        <h1>Userdept</h1>
                        <h3>Administrator Web App</h3>
                    </div>
                    <h1 className={webdevCss.projNumber}>04</h1>
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

export default Webdev