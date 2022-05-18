import React from 'react'
import { motion } from 'framer-motion'
import Back from './Back.js'
import worksCss from '../Stylesheets/works.module.css'

const Works = () => {

    const workBox = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const views = {
        hidden: { opacity: 0, y: -60 },
        show: {
            opacity: 1, y: 0, transition: {
                ease: 'easeInOut'
            }
        },
    }

    return (
        <div id={worksCss.workContainer}>
            <motion.div id={worksCss.projectContainer} variants={workBox} initial={'hidden'} animate={'show'}>
                <motion.div className={worksCss.projBox} variants={views}>
                    <div className={worksCss.projTitle}>
                        <h1>Uplifted</h1>
                        <h3>Branding</h3>
                    </div>
                    <h1 className={worksCss.projNumber}>(01)</h1>
                </motion.div>
                <motion.div className={worksCss.projBox} variants={views}>
                    <div className={worksCss.projTitle}>
                        <h1>Lorem Ipsum</h1>
                        <h3>Lorem Ipsum</h3>
                    </div>
                    <h1 className={worksCss.projNumber}>(02)</h1>
                </motion.div>
                <motion.div className={worksCss.projBox} variants={views}>
                    <div className={worksCss.projTitle}>
                        <h1>Lorem Ipsum</h1>
                        <h3>Lorem Ipsum</h3>
                    </div>
                    <h1 className={worksCss.projNumber}>(03)</h1>
                </motion.div>
                <motion.div className={worksCss.projBox} variants={views}>
                    <div className={worksCss.projTitle}>
                        <h1>Lorem Ipsum</h1>
                        <h3>Lorem Ipsum</h3>
                    </div>
                    <h1 className={worksCss.projNumber}>(04)</h1>
                </motion.div>
            </motion.div>
            <Back />
        </div>
    )
}

export default Works