import {combineReducers} from "redux";

import tables from "./tables";
import cart from "./cart";
import sort from "./sort";

export default combineReducers({
    tables,
    cart,
    sort
});