import { motion } from 'framer-motion'
import animateCss from '../Stylesheets/animatedpage.module.css'

const animations = {
    initial: { opacity: 0, },
    animate: { opacity: 1, },
    exit: { opacity: 0, },

}

const AnimatedPage = ({ children }) => {
    return (
        <motion.div id={animateCss.aniContainer} variants={animations} initial='initial' animate='animate' exit='exit'>
            {children}
        </motion.div>
    )
}

export default AnimatedPage