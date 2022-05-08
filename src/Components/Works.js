import React from 'react'
import Back from './Back.js'
import worksCss from '../Stylesheets/works.module.css'

const Works = () => {
    return (
        <div id={worksCss.workContainer}>
            <div id={worksCss.projectContainer}>
                <div className={worksCss.projBox}>
                    <div className={worksCss.projTitle}>
                        <h1>Uplifted</h1>
                        <h3>Branding</h3>
                    </div>
                    <h1 className={worksCss.projNumber}>(01)</h1>
                </div>
                <div className={worksCss.projBox}>
                    <div className={worksCss.projTitle}>
                        <h1>Lorem Ipsum</h1>
                        <h3>Lorem Ipsum</h3>
                    </div>
                    <h1 className={worksCss.projNumber}>(02)</h1>
                </div>
                <div className={worksCss.projBox}>
                    <div className={worksCss.projTitle}>
                        <h1>Lorem Ipsum</h1>
                        <h3>Lorem Ipsum</h3>
                    </div>
                    <h1 className={worksCss.projNumber}>(03)</h1>
                </div>
                <div className={worksCss.projBox}>
                    <div className={worksCss.projTitle}>
                        <h1>Lorem Ipsum</h1>
                        <h3>Lorem Ipsum</h3>
                    </div>
                    <h1 className={worksCss.projNumber}>(04)</h1>
                </div>
            </div>
            <Back />
        </div>
    )
}

export default Works