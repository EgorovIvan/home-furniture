import {combineReducers} from "redux";

import tables from "./tables";
import chairs from "./chairs";
import swing from "./swing";
import braziers from "./braziers";
import other from "./other";
import cart from "./cart";
import sort from "./sort";
import {userReducers} from '../redux/slice/user'

export default combineReducers({
    tables,
    chairs,
    swing,
    braziers,
    other,
    cart,
    sort,
    userReducers: userReducers
});