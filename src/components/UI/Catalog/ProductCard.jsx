import React from "react";
import {Card, Image} from "semantic-ui-react";
import IconCart from "../IconCart"
import "../scss/style.scss"
import "../scss/_global.scss"

const ProductCard = ({id, title, size, material, color, price, image, in_stock,
                         stateCartItem, addToCart, removeFromCart}) => {

    const addProduct = () => addToCart({id, title, size, material, color, price, image, in_stock})
    const removeProduct = () => removeFromCart(id)

    const handleClick = () => {
        if (!stateCartItem) {
            addProduct()
        } else {
            removeProduct()
        }
    }

    return (
        <Card >
            <div className='product__img' >
                <Image className='image' src={process.env.PUBLIC_URL + image} wrapped ui={false}/>
            </div>

            <Card.Content>
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
            </Card.Content>
            <Card.Content extra>
                <div className="product__price">
                    <span className="product__price-text">
                        {Intl.NumberFormat('ru-RU').format(price)} ₽</span>
                    <IconCart key={id} handleClick={handleClick} stateCartItem={stateCartItem} />
                </div>
            </Card.Content>
            <button className="product__instock"
                    // style={{color : (in_stock > 3) ? '$green' :
                    //         ((in_stock <= 3) && (in_stock > 0)) ? '#ffff00' : '#ff4000'}}
            >
                в наличии {in_stock}шт.
            </button>
        </Card>
    )

}

export default ProductCard