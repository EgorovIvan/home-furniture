import React from "react"
import "./scss/style.scss"
import "./scss/_global.scss"
import {NavLink} from "react-router-dom";


const Breadcrumbs = (props) => {

    const arrBc = props.arrBc

    return (
        <div className="breadcrumbs">
            <div className="container">
                <div className="breadcrumbs__inner">
                    <ul className="breadcrumbs__links">
                        <li className="breadcrumbs__item">
                            <NavLink className="breadcrumbs_link" to={"/"}>
                                Главная &nbsp;
                            </NavLink>
                        </li>
                        {
                            arrBc.map((arr, i) => {
                                const arr1 = [].concat(arrBc[0])
                                const arr2 = [].concat(arrBc[1])
                                return (
                                    <li className="breadcrumbs__item" key={i}>
                                        <NavLink className="breadcrumbs_link" to={arr1[i]}>
                                            &nbsp;  { arr2[i]} &nbsp;
                                        </NavLink>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumbs;