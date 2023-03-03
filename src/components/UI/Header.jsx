import React, {useEffect, useState} from "react"
import "./scss/style.scss"
import {NavLink} from "react-router-dom"
import logo from "../images/logo.png"
import IconCart from "./IconCart"
import useAuth from "../../hooks/useAuth";
import {useDispatch} from "react-redux";
import {logoutThunk} from "../../redux/slice/user";


const Header = ({countProduct}) => {
    const [styleCountProduct, setStyleCountProduct] = useState({visibility: "hidden"})
    const isAuth = useAuth().isAuth
    const dispatch = useDispatch()

    /* выход из системы */
    const logout = (e) => {
        e.preventDefault()
        dispatch(logoutThunk())
    }

    const handleClick = () => {
    }

    useEffect(() => {
        if (countProduct > 0) {
            setStyleCountProduct({visibility: "visible"})
        } else {
            setStyleCountProduct({visibility: "hidden"})
        }
    }, [countProduct])

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <nav className="menu">
                        <NavLink className="logo" to={"/"}>
                            <img src={logo} alt={"logo"}/>
                        </NavLink>

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
                            <li className="menu__list-item">
                                <NavLink className="menu__list-link" to={"/contacts"}>Контакты</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <ul className="profile__list">
                        <li className="profile__item">
                            {!isAuth ? (
                                <NavLink to={"/login"}>
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                                         viewBox="0 0 24 24">
                                        <path d="m13 16 5-4-5-4v3H4v2h9z"/>
                                        <path
                                            d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"/>
                                    </svg>
                                </NavLink>) : (
                                <div onClick={logout}>
                                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                                         viewBox="0 0 24 24">
                                        <path d="M16 13v-2H7V8l-5 4 5 4v-3z"/>
                                        <path
                                            d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"/>
                                    </svg>
                                </div>)}
                        </li>
                        <li className="profile__item">
                            <NavLink className="profile__link link-icon" to={"/cart"}>
                                <IconCart key={999} id={999} handleClick={handleClick} stateCartItem={false}/>
                            </NavLink>
                        </li>
                        <li className="header__cart-count" style={styleCountProduct}>{countProduct}</li>
                    </ul>
                </div>
            </div>

            <hr className="line"/>

        </header>
    );
};

export default Header;