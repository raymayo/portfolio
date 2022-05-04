import React from 'react'
import loaderCss from '../Stylesheets/loader.module.css'
import Lottie from "react-lottie";
import animationData from "../loader.json";

const Loader = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div id={loaderCss.loaderContainer}>
            <Lottie options={defaultOptions} height={600} width={600} />
        </div>
    )
}

export default Loader