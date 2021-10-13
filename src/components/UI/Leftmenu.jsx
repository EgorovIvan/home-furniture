import React from "react";
import {Button} from 'react-bootstrap';
import {NavLink} from "react-router-dom";

import './scss/style.scss';

function Leftmenu(props) {

    return (
        <div className="leftside-menu">
            <div className="leftside-menu__block">
                <Button onClick={() => props.setShowMessage(false)} className="leftside-menu__close">
                    <img src="../images/close.svg" alt={"close"}/>
                </Button>
            </div>
            <ul className="leftside-menu__list">
                <li className="leftside-menu__list-item">
                    <NavLink className="leftside-menu__list-link"
                       to={"/catalog/tables"}>Столы</NavLink>
                </li>
                <li className="leftside-menu__list-item">
                    <NavLink className="leftside-menu__list-link" to={"/catalog/chairs"}>Стулья</NavLink>
                </li>
                <li className="leftside-menu__list-item">
                    <NavLink className="leftside-menu__list-link" to={"/catalog/swing"}>Качели</NavLink>
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

export default Leftmenu;