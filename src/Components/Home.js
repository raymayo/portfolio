import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import homeCss from '../Stylesheets/home.module.css'




const Home = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1, transition: { staggerChildren: 0.1, ease: 'easeInOut', type: 'spring' },
        },
        exit: { transition: { staggerChildren: 0.1, ease: 'easeOut', type: 'spring' } }
    }

    const item = {
        hidden: { opacity: 0, x: -40 },
        show: { opacity: 1, x: 0, transition: { ease: 'easeInOut' } },
        exit: { opacity: 0, x: 40, transition: { ease: 'easeInOut' } }
    }
    return (

        <motion.div id={homeCss.homeContainer}>
            <motion.div id={homeCss.mainContent}

                variants={container}
                initial="hidden"
                animate="show"
                exit='exit'>

                <motion.h3 className={homeCss.subtext} variants={item}>PORTFOLIO-2022</motion.h3>
                <motion.h1 className={homeCss.mainTitle} variants={item}>RAY</motion.h1>
                <br />
                <motion.h1 className={homeCss.mainTitle} variants={item}>MAYO</motion.h1>
                <br />
                <motion.h1 className={homeCss.mainTitle} variants={item}>STUDIO</motion.h1>
                <motion.div id={homeCss.lowerText} variants={item}>
                    <h3>RAY MAYO</h3>
                    <h3>GRAPHIC DESIGN / WEB DEVELOPMENT</h3>
                </motion.div>
            </motion.div>
            <motion.div id={homeCss.view}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <h1><Link to="/browse">VIEW</Link></h1>
            </motion.div>
        </motion.div>

    )
}

export default Home;
