import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as tablesActions from "../actions/tables";
import * as chairsActions from "../actions/chairs";
import * as swingActions from "../actions/swing";
import * as braziersActions from "../actions/braziers";
import * as otherActions from "../actions/other";
import * as sortActions from "../actions/sort";
import App from "../components/App";
import orderBy from "lodash/orderBy";


const sortByFunc = (state, sortBy) => {
    switch (sortBy) {
        case 'recommendations':
            return state
        case 'price_increase':
            return orderBy(state, "price", 'asc')
        case 'decreasing_prices':
            return orderBy(state, "price", 'desc')
        case 'in_stock':
            return state.filter(item => item.in_stock > 0);
        default:
            return state
    }
}

const sortProducts = (state, searchQuery) =>
    state.filter(
        o => o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
             // o.price.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
    )

const searchProducts = (state, sortBy, searchQuery) => {
    return sortByFunc(sortProducts(state, searchQuery), sortBy)
}

const mapStateToProps = ({tables, chairs, sort, swing, braziers, other}) => ({
    tables: tables.items && searchProducts(tables.items, sort.sortBy, sort.searchQuery),
    isReady: tables.isReady,
    chairs: chairs.items && searchProducts(chairs.items, sort.sortBy, sort.searchQuery),
    isReadyChairs: chairs.isReadyChairs,
    swing: swing.items && searchProducts(swing.items, sort.sortBy, sort.searchQuery),
    isReadySwing: swing.isReadySwing,
    braziers: braziers.items && searchProducts(braziers.items, sort.sortBy, sort.searchQuery),
    isReadyBraziers: braziers.isReadyBraziers,
    other: other.items && searchProducts(other.items, sort.sortBy, sort.searchQuery),
    isReadyOther: other.isReadyOther
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(tablesActions, dispatch),
    ...bindActionCreators(chairsActions, dispatch),
    ...bindActionCreators(swingActions, dispatch),
    ...bindActionCreators(braziersActions, dispatch),
    ...bindActionCreators(otherActions, dispatch),
    ...bindActionCreators(sortActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)