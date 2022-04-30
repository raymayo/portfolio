import React from 'react'
import Back from './Back.js'
import worksCss from '../Stylesheets/works.module.css'

const Works = () => {
    return (
        <div id={worksCss.workContainer}>
            <div id={worksCss.projectContainer}>
                <div className={worksCss.projectCase}>
                    <div className={worksCss.imageCase}></div>
                    <h1 className={worksCss.projectTitle}>Title 1</h1>
                    <h5 className={worksCss.projectSub}>subtitle</h5>
                </div>
                <div className={worksCss.projectCase}>
                    <div className={worksCss.imageCase}></div>
                    <h1 className={worksCss.projectTitle}>Title 2</h1>
                    <h5 className={worksCss.projectSub}>subtitle</h5>
                </div>
                <div className={worksCss.projectCase}>
                    <div className={worksCss.imageCase}></div>
                    <h1 className={worksCss.projectTitle}>Title 3</h1>
                    <h5 className={worksCss.projectSub}>subtitle</h5>
                </div>
                <div className={worksCss.projectCase}>
                    <div className={worksCss.imageCase}></div>
                    <h1 className={worksCss.projectTitle}>Title 4</h1>
                    <h5 className={worksCss.projectSub}>subtitle</h5>
                </div>
                <div className={worksCss.projectCase}>
                    <div className={worksCss.imageCase}></div>
                    <h1 className={worksCss.projectTitle}>Title 5</h1>
                    <h5 className={worksCss.projectSub}>subtitle</h5>
                </div>
                <div className={worksCss.projectCase}>
                    <div className={worksCss.imageCase}></div>
                    <h1 className={worksCss.projectTitle}>Title 6</h1>
                    <h5 className={worksCss.projectSub}>subtitle</h5>
                </div>
            </div>
            <Back />
        </div>
    )
}

export default Works