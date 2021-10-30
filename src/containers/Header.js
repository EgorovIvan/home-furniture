import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cart";
import Header from "../components/UI/Header";
import uniqBy from "lodash/uniqBy"

const mapStateToProps = ({cart}) => ({
    totalPrice: cart.items.reduce((total, table) => total + table.price, 0),
    count: cart.items.length,
    items: uniqBy(cart.items, o => o.id)
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)

