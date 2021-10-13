import React from "react";
import {NavLink} from "react-router-dom";
import "../scss/style.scss"
import "../scss/_global.scss"

function Catalog() {

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
                                <span className="breadcrumbs_link">Каталог</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <section className="container">
                    <div className="catalog">
                        <div className="catalog__items">
                            <NavLink className="catalog__item" to={"/catalog/tables"}>
                                <img src="./../../images/catalog/Столы/стол_1.jpg" alt=""/>
                                <div className="catalog__nav">
                                    <p className="catalog__nav-text">
                                        Столы
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink className="catalog__item" to={"/catalog/chairs"}>
                                <img src="./../../images/catalog/Стулья/стул_1.jpg" alt=""/>
                                <div className="catalog__nav">
                                    <p className="catalog__nav-text">
                                        Стулья
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink className="catalog__item" to={"/catalog/swing"}>
                                <img src="./../../images/catalog/Качели/качели_1.jpg" alt=""/>
                                <div className="catalog__nav">
                                    <p className="catalog__nav-text">
                                        Качели
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink className="catalog__item" to={"/catalog/braziers"}>
                                <img src="./../../images/catalog/Мангалы/мангалы_1.jpg" alt=""/>
                                <div className="catalog__nav">
                                    <p className="catalog__nav-text">
                                        Мангалы
                                    </p>
                                </div>
                            </NavLink>
                            <NavLink className="catalog__item" to={"/catalog/other"}>
                                <img src="./../../images/catalog/Прочее/прочее_1.jpg" alt=""/>
                                <div className="catalog__nav">
                                    <p className="catalog__nav-text">
                                        Прочее
                                    </p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Catalog;