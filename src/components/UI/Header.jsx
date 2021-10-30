import React from "react"
import "./scss/style.scss"
import "./scss/_global.scss"
import ListButton from "./ListButton";
import {NavLink} from "react-router-dom";
import {Popup, List, Button, Image} from "semantic-ui-react";

const CartComponent = ({title, id, image, removeFromCart}) => (
    <List selection divided verticalAlign='middle'>
        <List.Item>
            <List.Content floated='right'>
                <Button onClick={removeFromCart.bind(this, id)}
                        color="red">Удалить</Button>
            </List.Content>
            <Image avatar src={image}/>
            <List.Content>{title}</List.Content>
        </List.Item>
    </List>
)


const Header = ({totalPrice, count, items}) => {

    return (
        <div className="wrapper">
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <NavLink className="logo" to={"/"}>
                            <img src="../images/logo1.png" alt={"logo"}/>
                        </NavLink>

                        <nav className="menu">
                            <ListButton/>

                            <ul className="menu__list">
                                <li className="menu__list-item">
                                    <NavLink className="menu__list-link" to={"/catalog"}>
                                        КАТАЛОГ
                                    </NavLink>
                                </li>
                                <li className="menu__list-item">
                                    <NavLink className="menu__list-link" to={"/gallery"}>
                                        ГАЛЕРЕЯ
                                    </NavLink>
                                </li>
                                <li className="menu__list-item">
                                    <NavLink className="menu__list-link" to={"/payment"}>ДОСТАВКА И ОПЛАТА</NavLink>
                                </li>
                                <li className="menu__list-item">
                                    <NavLink className="menu__list-link" to={"/contacts"}>КОНТАКТЫ</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <div className="profile">
                            <a className="profile__img" href="#">
                                <img src="./../images/entrance.png" alt={"profile"}/>
                            </a>
                        </div>
                        <div className="cart">
                            <a className="cart__link" href="#">
                                Итого (<b>{totalPrice}</b>)
                            </a>
                        </div>
                        <Popup
                            trigger={
                                <div className="cart">
                                    <a className="cart__link" href="#">
                                        Корзина (<b>{count}</b>)
                                    </a>
                                </div>
                            }
                            content={items.map(table => <CartComponent {...table}/>)}
                            on="click"
                            hideOnScroll
                        />


                    </div>
                </div>
            </header>
        </div>
    );

};

export default Header;