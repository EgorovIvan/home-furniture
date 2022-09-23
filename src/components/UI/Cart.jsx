import React from "react";
import "./scss/style.scss";
import "./scss/_global.scss";
import Breadcrumbs from "./Breadcrumbs";
import Product from "../../containers/Product";
import plural from "plural-ru";
import shopping from "../images/shopping.png"

const Cart = ({cartItems, totalCount, totalPrise}) => {
    const arrBc = [["/cart", ""], ["Корзина", ""]];

    return (
        <main className="main">
            <Breadcrumbs arrBc={arrBc}/>
            <div className="container">
                <div className="cart__inner">
                    <div className="cart__header">
                        <div className="title">
                            Корзина
                        </div>
                        <div className="cart__total">
                            {(totalCount > 0) ?'Итого ' + totalCount + ' ' +
                                plural(totalCount, 'товар', 'товара', 'товаров') + ' / ' +
                            totalPrise + ' ₽' : 'Пусто'}
                        </div>
                    </div>
                    {(totalCount > 0) ? cartItems.map((item, i) => <Product key={i}{...item}/>) :
                        <div className="cart__shopping">
                            <img src={shopping} alt="shopping"/>
                        </div>}
                </div>
            </div>
        </main>
    );
}

export default Cart;

