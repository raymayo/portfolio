import React from 'react'
import { Link } from 'react-router-dom'
import backCss from '../Stylesheets/back.module.css'

const Back = () => {
    return (
        <div id={backCss.back}>
            <h1><Link to='/browse'>BACK</Link></h1>
        </div>
    )
}

export default Back