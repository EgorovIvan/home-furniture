import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cart";
import ProductCard from "../components/UI/catalog/ProductCard"

const mapStateToProps = ({cart},  {id}) => ({
    stateCartItem: cart.items.find(item => item.id === id)
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)

