import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {useRef} from "react"
import Slider from "react-slick"
import "../scss/style.scss"
import "../scss/_global.scss"

const ProductSlider = () => {

    const methods = useRef()

    const settings = {
        infinite: true,
        autoplay: true,
        interval: 5000,
        infiniteLoop: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }

    const handleClickPrev = () => {
        methods.current.slickPrev()
    }

    const handleClickNext = () => {
        methods.current.slickNext()
    }

    return (
        <div className="carousel">
            <Slider ref={methods} {...settings}>
                    <a className="carousel__link" href="/">
                        <img className="carousel__img" src="./../../images/new_products/1.jpg"
                             alt="images"/>
                    </a>
                    <a className="carousel__link" href="/">
                        <img className="carousel__img" src="./../../images/new_products/2.jpg"
                             alt="images"/>
                    </a>
                    <a className="carousel__link" href="/">
                        <img className="carousel__img" src="./../../images/new_products/3.jpg"
                             alt="images"/>
                    </a>
                    <a className="carousel__link" href="/">
                        <img className="carousel__img" src="./../../images/new_products/4.jpg"
                             alt="images"/>
                    </a>
                    <a className="carousel__link" href="/">
                        <img className="carousel__img" src="./../../images/new_products/5.jpg"
                             alt="images"/>
                    </a>
                <a className="carousel__link" href="/">
                    <img className="carousel__img" src="./../../images/new_products/6.jpg"
                         alt="images"/>
                </a>
                <a className="carousel__link" href="/">
                    <img className="carousel__img" src="./../../images/new_products/7.jpg"
                         alt="images"/>
                </a>
                <a className="carousel__link" href="/">
                    <img className="carousel__img" src="./../../images/new_products/8.jpg"
                         alt="images"/>
                </a>
                <a className="carousel__link" href="/">
                    <img className="carousel__img" src="./../../images/new_products/9.jpg"
                         alt="images"/>
                </a>
                <a className="carousel__link" href="/">
                    <img className="carousel__img" src="./../../images/new_products/10.jpg"
                         alt="images"/>
                </a>
                <a className="carousel__link" href="/">
                    <img className="carousel__img" src="./../../images/new_products/11.jpg"
                         alt="images"/>
                </a>
                <a className="carousel__link" href="/">
                    <img className="carousel__img" src="./../../images/new_products/12.jpg"
                         alt="images"/>
                </a>
            </Slider>
            <div className="carousel__btnS">
                <svg xmlns="http://www.w3.org/2000/svg" className="prev"  onClick={handleClickPrev} width="56.898"
                     height="91"
                     viewBox="0 0 56.898 91">
                    <path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(0 91) rotate(-90)"
                          fill="#ADD8E6"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="next" onClick={handleClickNext} width="56.898"
                     height="91"
                     viewBox="0 0 56.898 91">
                    <path d="M45.5,0,91,56.9,48.452,24.068,0,56.9Z" transform="translate(56.898) rotate(90)"
                          fill="#ADD8E6"/>
                </svg>
            </div>
        </div>
    )
}


export default ProductSlider;