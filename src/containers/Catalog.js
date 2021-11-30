import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sortActions from "../actions/sort";
import Catalog from "../components/UI/Catalog/Catalog";

const mapStateToProps = ({sort}) => ({
    sortBy: sort.sortBy
});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(sortActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)

