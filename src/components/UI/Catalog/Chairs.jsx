import React from "react";
import {NavLink} from "react-router-dom";
import "../scss/style.scss"
import "../scss/_global.scss"

function Chairs() {

    return (
        <div className="wrapper">
            <main className="main">
                <div className="breadcrumbs">
                    <div className="container">
                        <ul className="breadcrumbs__links">
                            <li className="breadcrumbs__item">
                                <NavLink className="breadcrumbs_link" to={"/"}>Главная</NavLink>
                            </li>
                            <li className="breadcrumbs__item">
                                <NavLink className="breadcrumbs_link"
                                         to={"/catalog"}>Каталог</NavLink>
                            </li>
                            <li className="breadcrumbs__item">
                                <span className="breadcrumbs_link">Стулья</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <section className="container">
                    <div className="tables">
                        <div className="tables__items">
                            <a className="tables__item" href="#">
                                <img src="./../../images/catalog/Стулья/стул_1.jpg" alt=""/>
                                <div className="tables__desc">
                                    <p className="tables__desc-text">
                                        Описание:
                                    </p>
                                </div>
                            </a>
                            <a className="tables__item" href="#">
                                <img src="./../../images/catalog/Стулья/стул_2.jpg" alt=""/>
                                <div className="tables__desc">
                                    <p className="tables__desc-text">
                                        Описание:
                                    </p>
                                </div>
                            </a>
                            <a className="tables__item" href="#">
                                <img src="./../../images/catalog/Стулья/стул_3.jpg" alt=""/>
                                <div className="tables__desc">
                                    <p className="tables__desc-text">
                                        Описание:
                                    </p>
                                </div>
                            </a>
                            <a className="tables__item" href="#">
                                <img src="./../../images/catalog/Стулья/стул_4.jpg" alt=""/>
                                <div className="tables__desc">
                                    <p className="tables__desc-text">
                                        Описание:
                                    </p>
                                </div>
                            </a>
                            <a className="tables__item" href="#">
                                <img src="./../../images/catalog/Стулья/стул_5.jpg" alt=""/>
                                <div className="tables__desc">
                                    <p className="tables__desc-text">
                                        Описание:
                                    </p>
                                </div>
                            </a>
                            <a className="tables__item" href="#">
                                <img src="./../../images/catalog/Стулья/стул_6.jpg" alt=""/>
                                <div className="tables__desc">
                                    <p className="tables__desc-text">
                                        Описание:
                                    </p>
                                </div>
                            </a>
                            <a className="tables__item" href="#">
                                <img src="./../../images/catalog/Стулья/стул_7.jpg" alt=""/>
                                <div className="tables__desc">
                                    <p className="tables__desc-text">
                                        Описание:
                                    </p>
                                </div>
                            </a>
                            <a className="tables__item" href="#">
                                <img src="./../../images/catalog/Стулья/стул_8.jpg" alt=""/>
                                <div className="tables__desc">
                                    <p className="tables__desc-text">
                                        Описание:
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Chairs;