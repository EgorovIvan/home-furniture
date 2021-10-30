import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cart";
import TableСard from "../components/UI/Catalog/TableСard";

const mapStateToProps = ({cart}, { id }) => ({
    addedCount: cart.items.reduce(
        (count, table) => count + (table.id === id ? 1 : 0), 0)
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableСard)

