import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as tablesActions from "../actions/tables";
import App from '../components/App';
import orderBy from "lodash/orderBy";
import * as sortActions from "../actions/sort";

const sortByFunc = (tables, sortBy) => {
    switch (sortBy) {
        case 'recommendations':
            return tables
        case 'price_increase':
            return orderBy(tables, "price", 'asc')
        case 'decreasing_prices':
            return orderBy(tables, "price", 'desc')
        default:
            return tables
    }
}

const sortTables = (tables, searchQuery) =>
    tables.filter(
        o => o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
            // || o.price.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
    )

const searchTables = (tables, sortBy, searchQuery) => {
    return sortByFunc(sortTables(tables, searchQuery), sortBy)
}

const mapStateToProps = ({tables, sort}) => ({
    tables: tables.items && searchTables(tables.items, sort.sortBy, sort.searchQuery),
    isReady: tables.isReady
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(tablesActions, dispatch),
    ...bindActionCreators(sortActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)