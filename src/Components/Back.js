import React from 'react'
import { Link } from 'react-router-dom'
import backCss from '../Stylesheets/back.module.css'

const Back = () => {
    return (
        <div id={backCss.back}>
            <Link to='/browse'>
                <h1>BACK</h1>
            </Link>
        </div>
    )
}

export default Back