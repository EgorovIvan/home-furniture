import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cart";
import Header from "../components/UI/Header";

const mapStateToProps = ({cart}) => ({
    countProduct: cart.items.length
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header)

