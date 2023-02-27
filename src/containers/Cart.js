import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import Cart from "../components/UI/cart/Cart"
import * as cartActions from "../actions/cart"

const mapStateToProps = ({cart}) => ({
    cartItems: cart?.items,
    totalCount: cart?.items.length,
    totalPrise: Intl.NumberFormat('ru-RU').format(cart?.items.reduce((sum, item) => {
        return item.price * item.count + sum
    }, 0))
})

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart)

