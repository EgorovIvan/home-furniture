import React from "react";
import {Button} from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import table from "../images/icon_product/table.png"
import chair from "../images/icon_product/chair.png"

import './scss/style.scss';

function LeftMenu({closeFormNav}) {

    return (
        <div className="leftside-menu">
            <div className="leftside-menu__block">
                <Button onClick={closeFormNav} className="leftside-menu__close">
                    <img src="../images/close.svg" alt={"close"}/>
                </Button>
            </div>
            <ul className="leftside-menu__list">
                <li className="leftside-menu__list-item">
                    <NavLink className="leftside-menu__list-link" to={"/catalog"}>
                        Каталог
                    </NavLink>
                </li>
                <hr className="line"/>
                <li className="leftside-menu__list-item">
                    <NavLink className="leftside-menu__list-link" to={"/catalog/tables"}>
                        <div className="leftside-menu__img">
                            <img src={table} alt={"product"}/>
                        </div>
                        Столы
                    </NavLink>
                </li>
                <li className="leftside-menu__list-item">
                    <NavLink className="leftside-menu__list-link" to={"/catalog/chairs"}>
                        <div className="leftside-menu__img">
                            <img src={chair} alt={"product"}/>
                        </div>
                        Стулья
                    </NavLink>
                </li>
                <li className="leftside-menu__list-item">
                    <NavLink className="leftside-menu__list-link" to={"/catalog/swing"}>
                        <div className="leftside-menu__img">
                            <img src={table} alt={"product"}/>
                        </div>
                        Качели
                    </NavLink>
                </li>
                <li className="leftside-menu__list-item">
                    <NavLink className="leftside-menu__list-link" to={"/catalog/braziers"}>Мангалы</NavLink>
                </li>
                <li className="leftside-menu__list-item">
                    <NavLink className="leftside-menu__list-link" to={"/catalog/other"}>Прочее</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default LeftMenu;