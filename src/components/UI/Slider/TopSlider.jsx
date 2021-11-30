import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import "../scss/style.scss";
import "../scss/_global.scss";
import slide1 from './../../images/top/1.jpg';
import slide2 from './../../images/top/2.jpeg';
import slide3 from './../../images/top/3.jpg';

const properties = {
    autoPlay: true,
    interval: 5000,
    infiniteLoop: true,
}

function TopSlider () {

        return (
            <Carousel {...properties}>
                <div className="top__slider">
                    <img className="top__slider-img" src={slide1} alt="slide№1"/>
                </div>
                <div className="top__slider">
                    <img className="top__slider-img" src={slide2} alt="slide№2"/>
                </div>
                <div className="top__slider">
                    <img className="top__slider-img" src={slide3} alt="slide№3"/>
                </div>
            </Carousel>


        )
}

export default TopSlider;