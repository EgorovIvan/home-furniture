import React from "react";
import {Card, Icon, Image} from "semantic-ui-react";
import "../../scss/style.scss"
import "../../scss/_global.scss"

const SwingCard = (swing) => {
    const {title, size, material, color, price, image,  in_stock} = swing

    return (
        <Card>
            <div className='tables__item img'>
                <Image className='image' src={process.env.PUBLIC_URL + image} wrapped ui={false}/>
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
            </Card.Content>
            <Card.Content extra>
                <p>
                    <Icon name='rub'/>
                    {price}
                </p>
            </Card.Content>
            <button className="tables__instock">в наличии {in_stock}шт.</button>
        </Card>
    )

}

export default SwingCard