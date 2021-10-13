import React from "react";
import {NavLink} from "react-router-dom";
import Iframe from "react-iframe";

function Contacts() {

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
                                    <span className="breadcrumbs_link">Контакты</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={"map"}>
                        <Iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d8929.36751089592!2d52.320221!3d55.978106!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1633941058786!5m2!1sru!2sru"
                                width="100%" style="border:0;" allowFullScreen="" loading="lazy"/>
                    </div>

            </main>
        </div>

    )
}

export default Contacts;