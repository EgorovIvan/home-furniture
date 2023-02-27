import React, {useState} from "react";
import IconCart from "./IconCart"
import "../scss/style.scss"

const ProductCard = ({
                         id, title, size, material, color, price, image, in_stock,
                         addToCart, removeFromCart
                     }) => {
    const [stateCartItem, setStateCartItem] = useState(false)

    const addProduct = () => addToCart({id, title, size, material, color, price, image, in_stock})
    const removeProduct = () => removeFromCart(id)

    const handleClick = () => {
        if (!stateCartItem) {
            setStateCartItem(true)
            try {
                addProduct()
            } catch(e) {
                console.log(`ошибка в reducers: ${e}`)
            }
        } else {
            setStateCartItem(false)
            removeProduct()
        }
    }

    return (
        <div className='product'>
            <div className='product__item'>
                <div className='product__img'>
                    <img className='image' src={process.env.PUBLIC_URL + image} alt='product'/>
                </div>

                <hr className='line'/>

                <div className='product__title'>
                    {title}
                </div>
                <div className='product__text'>
                    Размеры: {size}
                </div>
                <div className='product__text'>
                    Материал: {material}
                </div>
                <div className='product__text'>
                    Цвет: {color}
                </div>
                <div className="product__price">
                    <span className="product__price-text">
                        {Intl.NumberFormat('ru-RU').format(price)} ₽</span>
                    <IconCart key={id} id={id} handleClick={handleClick} stateCartItem={stateCartItem}/>
                </div>
                <button className="product__instock"
                        style={{
                            color: (in_stock > 2) ? '$green' :
                                ((in_stock <= 2) && (in_stock > 0)) ? '#ffff00' : '#ff4000'
                        }}
                >
                    в наличии {in_stock}шт.
                </button>
            </div>
        </div>
    )
}

export default ProductCard