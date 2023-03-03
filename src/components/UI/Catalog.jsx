import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import "./scss/style.scss"
import "../scss/_global.scss"
import Breadcrumbs from "../Breadcrumbs";


function Catalog({
                     setSort, tables, isReady, chairs, isReadyChairs, swing, isReadySwing,
                     braziers, isReadyBraziers, other, isReadyOther
                 }) {

    let arrTables = []
    let arrChairs = []
    let arrSwing = []
    let arrBraziers = []
    let arrOther = []

    const arrSum = (array) => {
        let sum = 0
        for (let i = 0; i < array.length; i++) {
            sum += array[i]
        }
        return (sum)
    }

    const arrBc = [["/catalog", ""], ["Каталог", ""]];

    function viewProduct() {
        try {
            return isReady &&
                tables.map((table, i) => {
                    const {in_stock} = table
                    arrTables[i] = in_stock;
                    return ""
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="main">

            <Breadcrumbs arrBc={arrBc}/>

            <section className="container">
                <div className="catalog">
                    <div className="catalog__items">
                        <NavLink className="catalog__item" to={"/catalog/tables"}>
                            <img src={process.env.PUBLIC_URL + "/images/catalog/cat_tables.png"}
                                 name="recommendations" onClick={e => setSort(e.target.name)} alt=""/>
                            <div className="catalog__nav">
                                <button className="catalog__nav-text" name="recommendations"
                                        onClick={e => setSort(e.target.name)}>
                                    Столы . . .
                                </button>
                                <button className="catalog__instock-text" name="in_stock"
                                        onClick={e => setSort(e.target.name)}>
                                    {viewProduct()}
                                    в наличии {arrSum(arrTables)}шт.
                                </button>
                            </div>
                        </NavLink>
                        <NavLink className="catalog__item" to={"/catalog/chairs"}>
                            <img src={process.env.PUBLIC_URL + "/images/catalog/cat_chairs.png"}
                                 name="recommendations" onClick={e => setSort(e.target.name)} alt=""/>
                            <div className="catalog__nav">
                                <button className="catalog__nav-text" name="recommendations"
                                        onClick={e => setSort(e.target.name)}>
                                    Стулья . . .
                                </button>
                                <button className="catalog__instock-text" name="in_stock"
                                        onClick={e => setSort(e.target.name)}>
                                    {isReadyChairs &&
                                    chairs.map((chair, i) => {
                                        const {in_stock} = chair
                                        arrChairs[i] = in_stock;
                                        return ""
                                    })
                                    }
                                    в наличии {arrSum(arrChairs)}шт.
                                </button>
                            </div>
                        </NavLink>
                        <NavLink className="catalog__item" to={"/catalog/swing"}>
                            <img src={process.env.PUBLIC_URL + "/images/catalog/cat_swings.jpg"}
                                 name="recommendations" onClick={e => setSort(e.target.name)} alt=""/>
                            <div className="catalog__nav">
                                <button className="catalog__nav-text" name="recommendations"
                                        onClick={e => setSort(e.target.name)}>
                                    Качели . . .
                                </button>
                                <button className="catalog__instock-text" name="in_stock"
                                        onClick={e => setSort(e.target.name)}>
                                    {isReadySwing &&
                                    swing.map((swing, i) => {
                                        const {in_stock} = swing
                                        arrSwing[i] = in_stock;
                                        return ""
                                    })
                                    }
                                    в наличии {arrSum(arrSwing)}шт.
                                </button>
                            </div>
                        </NavLink>
                        <NavLink className="catalog__item" to={"/catalog/braziers"}>
                            <img src={process.env.PUBLIC_URL + "/images/catalog/cat_braziers.jpg"}
                                 name="recommendations" onClick={e => setSort(e.target.name)} alt=""/>
                            <div className="catalog__nav">
                                <button className="catalog__nav-text" name="recommendations"
                                        onClick={e => setSort(e.target.name)}>
                                    Мангалы . . .
                                </button>
                                <button className="catalog__instock-text" name="in_stock"
                                        onClick={e => setSort(e.target.name)}>
                                    {isReadyBraziers &&
                                    braziers.map((brazier, i) => {
                                        const {in_stock} = brazier
                                        arrBraziers[i] = in_stock;
                                        return ""
                                    })
                                    }
                                    в наличии {arrSum(arrBraziers)}шт.
                                </button>
                            </div>
                        </NavLink>
                        <NavLink className="catalog__item" to={"/catalog/other"}>
                            <img src={process.env.PUBLIC_URL + "/images/catalog/cat_other.jpg"}
                                 name="recommendations" onClick={e => setSort(e.target.name)} alt=""/>
                            <div className="catalog__nav">
                                <button className="catalog__nav-text" name="recommendations"
                                        onClick={e => setSort(e.target.name)}>
                                    Прочее . . .
                                </button>
                                <button className="catalog__instock-text" name="in_stock"
                                        onClick={e => setSort(e.target.name)}>
                                    {isReadyOther &&
                                    other.map((other, i) => {
                                        const {in_stock} = other
                                        arrOther[i] = in_stock;
                                        return ""
                                    })
                                    }
                                    в наличии {arrSum(arrOther)}шт.
                                </button>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </section>
            <Outlet />
        </main>
    )
}

export default Catalog;