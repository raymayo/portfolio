import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import homeCss from '../Stylesheets/home.module.css'



const Home = () => {
    const container = {
        hidden: { y: 100 },
        show: {
            y: 0,
            transition: {
                staggerChildren: 0.1, ease: 'easeInOut', type: 'spring'
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0, transition: { ease: 'easeInOut' } }
    }
    return (
        <div id={homeCss.homeContainer}>
            <motion.div id={homeCss.mainContent}

                variants={container}
                initial="hidden"
                animate="show">

                <motion.h3 className={homeCss.subtext}>PORTFOLIO-2022</motion.h3>
                <motion.h1 className={homeCss.mainTitle} variants={item}>RAY</motion.h1>
                <br />
                <motion.h1 className={homeCss.mainTitle} variants={item}>MAYO</motion.h1>
                <br />
                <motion.h1 className={homeCss.mainTitle} variants={item}>STUDIO</motion.h1>
                <div id={homeCss.lowerText}>
                    <motion.h3>RAY MAYO</motion.h3>
                    <motion.h3>GRAPHIC DESIGN / WEB DEVELOPMENT</motion.h3>
                </div>
            </motion.div>
            <div id={homeCss.view}>
                <h1><Link to="/browse">VIEW</Link></h1>
            </div>
        </div>
    )
}

export default Home;
