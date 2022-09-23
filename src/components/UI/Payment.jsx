import React from "react";
import {NavLink} from "react-router-dom";

function Payment() {

    return (
        <main className="main">
            <div className="breadcrumbs">
                <div className="container">
                    <ul className="breadcrumbs__links">
                        <li className="breadcrumbs__item">
                            <NavLink className="breadcrumbs_link" to={"/"}>Главная</NavLink>
                        </li>
                        <li className="breadcrumbs__item">
                            <span className="breadcrumbs_link">Доставка и Оплата</span>
                        </li>
                    </ul>
                </div>
            </div>

            <section className={"container"}>
                <div>
                    <h1>
                        ERROR 404
                    </h1>
                    <p>
                        Для этого еще нет опыта/появится в ближайшем будущем
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Payment;