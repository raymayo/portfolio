import React from 'react'
import { Link } from 'react-router-dom'
import browseCss from '../Stylesheets/browse.module.css'

const Browse = () => {
    return (
        <div id={browseCss.tabContainer}>
            <div id={browseCss.browseContainer}>
                <div className={browseCss.linkContainer}>
                    <div className={browseCss.inlineLink}>
                        <Link to="/works">
                            <h1>WORKS</h1>
                        </Link><span>(01)</span>

                    </div>
                    <div className={browseCss.inlineLink}>
                        <Link to="/about">
                            <h1>ABOUT</h1>
                        </Link><span>(02)</span>
                    </div>
                    <div className={browseCss.inlineLink}>
                        <Link to="/social">
                            <h1>SOCIALS</h1>
                        </Link><span>(03)</span>
                    </div>
                    <div className={browseCss.inlineLink}>
                        <Link to="/contact">
                            <h1>CONTACT</h1>
                        </Link><span>(04)</span>
                    </div>
                </div>
            </div>
            <div id={browseCss.exit}>
                <h1><Link to="/portfolio">EXIT</Link></h1>
            </div>
        </div>
    )
}

export default Browse;