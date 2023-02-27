import React from "react"
import "../scss/style.scss"

const ProductCardInCart = ({id, title, size, material, color, price, image,
                     count, addToCart, decFromCart, removeFromCart}) => {

    const addItem = () => {
        addToCart({id})
    }

    const decItem = () => {
        decFromCart({id})
    }

    const deleteProduct = () => {
        removeFromCart(id)
    }

    return (
        <div className="container">
            <div className="product">
                <div className="product__item">
                    <img className="product__thumb"
                         src={process.env.PUBLIC_URL + image}
                         alt=""/>
                </div>
                <ul className="product__list">
                    <li className="product__title">{title}</li>
                    <li className="product__text">Размеры: {size}</li>
                    <li className="product__text">Материал: {material}</li>
                    <li className="product__text"> Цвет:{color}</li>
                </ul>
                <div className="product__total">
                    <div className="product__counter">
                        <svg onClick={decItem}
                            className="icon-ctr" width="32px" height="32px" viewBox="0 0 32 32">
                            <g transform="scale(2)">
                                <circle className="btn-ctr" cx="8" cy="8" r="8"/>
                                <rect className="st1" width="2" height="10" x="7" y="-13" transform="rotate(90)"/>
                            </g>
                        </svg>
                        <div>{count}</div>
                        <svg onClick={addItem}
                            className="icon-ctr"
                             viewBox="0 0 128 128"
                             width="32px" height="32px">
                            <circle className="btn-ctr" cx="64" cy="64" r="64"/>
                            <path className="st1" d="M103,57H71V25c0-0.6-0.4-1-1-1H58c-0.6,0-1,0.4-1,1v32H25c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h32v32  c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V71h32c0.6,0,1-0.4,1-1V58C104,57.4,103.6,57,103,57z"/>
                        </svg>
                    </div>
                    <div className="product__price-text">
                        {Intl.NumberFormat('ru-RU').format(count * price)}
                    </div>
                </div>
                <div className="product__delete" onClick={deleteProduct}>
                    <svg className="icon-del"
                         viewBox="0 0 128 128"
                         width="32px" height="32px"
                         fill="none">
                        <circle className="btn-del" cx="64" cy="64" r="64"/>
                        <path className="st1"
                              d="M100.3,90.4L73.9,64l26.3-26.4c0.4-0.4,0.4-1,0-1.4l-8.5-8.5c-0.4-0.4-1-0.4-1.4,0L64,54.1L37.7,27.8  c-0.4-0.4-1-0.4-1.4,0l-8.5,8.5c-0.4,0.4-0.4,1,0,1.4L54,64L27.7,90.3c-0.4,0.4-0.4,1,0,1.4l8.5,8.5c0.4,0.4,1.1,0.4,1.4,0L64,73.9  l26.3,26.3c0.4,0.4,1.1,0.4,1.5,0.1l8.5-8.5C100.7,91.4,100.7,90.8,100.3,90.4z"/>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default ProductCardInCart;

