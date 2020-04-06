import React from 'react';
import './Home.css'
import ControlledCarousel from '../ControlledCarousel/ControlledCarousel';

function Home() {
    return (
        <div className="Home">
            <div className="Home_introImg">
                <img src="./images/zoomgezerFb.png" alt="zoom"/>
            </div>

            <ControlledCarousel />
        </div>
    )
}

export default Home
