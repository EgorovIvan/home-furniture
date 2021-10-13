import React from "react"
import "./scss/style.scss"
import "./scss/_global.scss"
import ListButton from "./ListButton";
import {NavLink} from "react-router-dom";

function Header() {

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
                            <a className="profile__link" href="#">ПРОФИЛЬ</a>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    );

};

export default Header;