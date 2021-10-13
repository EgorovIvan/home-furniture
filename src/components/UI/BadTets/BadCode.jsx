import React, {Component} from "react"
import "../scss/style.scss";
import Slider from "react-slick";

export default class BadCode extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 700,
            slidesToShow: 1,
            adaptiveHeight: true
        };

        return (
            <section className="top">
                <div className="top__inner">
                    {/*<div className="top__slider">*/}
                    {/*    <img src="../../images/logo1.png" alt=""/>*/}

                    {/*</div>*/}
                    <div className="top__slider" >
                        <Slider {...settings} >

                            <div className="top__slider-item">
                                <img className="top__slider-img" src="../../images/top/1.jpg" alt="images"/>
                            </div>
                            <div className="top__slider-item">
                                <img className="top__slider-img" src="../../images/top/2.jpeg" alt="images"/>
                            </div>
                            <div className="top__slider-item">
                                <img className="top__slider-img" src="../../images/top/3.jpg" alt="images"/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>


        );
    }
}

