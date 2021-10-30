import React from "react";
import {Card, Icon, Image, Button} from "semantic-ui-react";
import "../scss/style.scss"
import "../scss/_global.scss"

const TableCard = (table) => {
    const {title, size, material, color, price, image, addToCart, addedCount} = table
    return (
        <Card>
            <div className='tables__item img'>
                <Image className='image' src={image} wrapped ui={false}/>
            </div>

            <Card.Content>
                <Card.Header>
                    {title}
                </Card.Header>
                <Card.Meta>
                <span className='date'>
                    Размеры: {size}
                </span>
                </Card.Meta>
                <Card.Meta>
                <span className='date'>
                    Материал: {material}
                </span>
                </Card.Meta>
                <Card.Meta>
                <span className='date'>
                    Цвет: {color}
                </span>
                </Card.Meta>
                {/*<Card.Description>*/}
                {/*    Описание:*/}
                {/*</Card.Description>*/}
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='rub'/>
                    {price}
                </a>
            </Card.Content>
            <Button onClick={addToCart.bind(this, table)}>Добавить в корзину {addedCount > 0 && `(${addedCount})`}</Button>
        </Card>
    )

}

export default TableCard