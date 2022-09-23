import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Product from "../components/UI/Product"
import {addToCart, decFromCart, removeFromCart} from "../actions/cart";


const mapStateToProps = () => ({

})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators({decFromCart, removeFromCart, addToCart}, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product)

