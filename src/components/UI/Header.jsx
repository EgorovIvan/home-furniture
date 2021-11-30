import React, {useEffect, useReducer, useState} from "react"
import axios from 'axios'
import {Redirect} from "react-router-dom"
import "./scss/style.scss"
import "./scss/_global.scss"
import ListButton from "./ListButton"
import {NavLink} from "react-router-dom"
import Login from "./Login"
import login from "../../reducers/login"
import socket from "../../socket"
import logo from "../images/logo.png"
import reg from "./../images/login.png"


// const CartComponent = ({title, id, image, removeFromCart}) => (
//     <List selection divided verticalAlign='middle'>
//         <List.Item>
//             <List.Content floated='right'>
//                 <Button onClick={removeFromCart.bind(this, id)}
//                         color="red">Удалить</Button>
//             </List.Content>
//             <Image avatar src={image}/>
//             <List.Content>{title}</List.Content>
//         </List.Item>
//     </List>
// )

const Header = ({totalPrice, count, items}) => {
    const [showForm, setShowForm] = useState(false)
    const handleOpen = () => setShowForm(true)
    const handleClose = () => setShowForm(false)

    const [state, dispatch] = useReducer(login, {
        isAuth: false,
        roomId: null,
        userName: null,
        users: [],
        messages: []
    })

    const onLogin = async (obj) => {
        dispatch({
            type: 'IS_AUTH',
            payload: obj
        })
        socket.emit('ROOM:JOIN', obj);
        const {data} = await axios.get(`/rooms/${obj.roomId}`);
        dispatch({
            type: 'SET_DATA',
            payload: data,
        });
    }

    const setUsers = (users) => {
        dispatch({
            type: 'SET_USERS',
            payload: users
        })
    }

    const addMessage = (message) => {
        dispatch({
            type: 'NEW_MESSAGE',
            payload: message,
        });
    };

    useEffect((users) => {
        socket.on('ROOM:SET_USERS', setUsers)
        socket.on('ROOM:NEW_MESSAGE', addMessage)
    }, [])


    return (
        <div className="wrapper">
            <header className="header">
                <div className="container" onClick={() => {
                    if (showForm === true) return handleClose()
                }}>
                    <div className="header__inner">
                        <NavLink className="logo" to={"/"}>
                            <img src={logo} alt={"logo"}/>
                        </NavLink>

                        <nav className="menu">

                            <ListButton/>

                            <ul className="menu__list">
                                <li className="menu__list-item">
                                    <NavLink className="menu__list-link" to={"/catalog"}>
                                        Каталог
                                    </NavLink>
                                </li>
                                <li className="menu__list-item">
                                    <NavLink className="menu__list-link" to={"/gallery"}>
                                        Галерея
                                    </NavLink>
                                </li>
                                {/*<li className="menu__list-item">*/}
                                {/*    <NavLink className="menu__list-link" to={"/payment"}>Доставка и оплата</NavLink>*/}
                                {/*</li>*/}
                                <li className="menu__list-item">
                                    <NavLink className="menu__list-link" to={"/contacts"}>Контакты</NavLink>
                                </li>
                            </ul>
                        </nav>
                        <button className="profile" onClick={handleOpen}>
                            <div className="profile__img">
                                <img src={reg} alt={"profile"}/>
                            </div>
                            <p>Войти</p>
                        </button>

                        {/*<div className="cart" onClick={handleClose}>*/}
                        {/*    <a className="cart__link" href="/">*/}
                        {/*        Итого (<b>{totalPrice}</b>)*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                        {/*<Popup*/}
                        {/*    trigger={*/}
                        {/*        <div className="cart">*/}
                        {/*            <a className="cart__link" href="/">*/}
                        {/*                Корзина (<b>{count}</b>)*/}
                        {/*            </a>*/}
                        {/*        </div>*/}
                        {/*    }*/}
                        {/*    content={items.map(table => <CartComponent {...table}/>)}*/}
                        {/*    on="click"*/}
                        {/*    hideOnScroll*/}
                        {/*/>*/}
                    </div>
                </div>

                {showForm && <Login
                    showForm={showForm}
                    handleClose={handleClose}
                    onLogin={onLogin}
                />}
                {state.isAuth && <Redirect to="/profile"/>}

                <hr className="line"/>

            </header>
        </div>
    );
};

export default Header;