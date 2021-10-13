import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import "./../scss/style.scss";
import "./../scss/_global.scss";

const ProductSlider = () => {
    const settings = {
        // dots: true,
        infinite: true,
        autoplay: true,
        interval: 5000,
        infiniteLoop: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>


                <div className="products__slider-item">
                    <a className="products__slider-link" href="#">
                        <img className="products__slider-img" src="./../../images/new_products/1.jpg"
                             alt="images"/>
                    </a>
                </div>
                <div className="products__slider-item">
                    <a className="products__slider-link" href="#">
                        <img className="products__slider-img" src="./../../images/new_products/2.jpg"
                             alt="images"/>
                    </a>
                </div>
                <div className="products__slider-item">
                    <a className="products__slider-link" href="#">
                        <img className="products__slider-img" src="./../../images/new_products/3.jpg"
                             alt="images"/>
                    </a>
                </div>
            <div className="products__slider-item">
                <a className="products__slider-link" href="#">
                    <img className="products__slider-img" src="../images/new_products/4.jpg"
                         alt="images"/>
                </a>
            </div>
            <div className="products__slider-item">
                <a className="products__slider-link" href="#">
                    <img className="products__slider-img" src="../images/new_products/5.jpg"
                         alt="images"/>
                </a>
            </div>
            <div className="products__slider-item">
                <a className="products__slider-link" href="#">
                    <img className="products__slider-img" src="../images/new_products/6.jpg"
                         alt="images"/>
                </a>
            </div>
            <div className="products__slider-item">
                <a className="products__slider-link" href="#">
                    <img className="products__slider-img" src="../images/new_products/7.jpg"
                         alt="images"/>
                </a>
            </div>
            <div className="products__slider-item">
                <a className="products__slider-link" href="#">
                    <img className="products__slider-img" src="../images/new_products/8.jpg"
                         alt="images"/>
                </a>
            </div>


        </Slider>
    )
}

export default ProductSlider;