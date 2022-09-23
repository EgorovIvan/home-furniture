import React, {Component} from "react";
import './App.css';
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom"
import Main from "./UI/Main";
import Catalog from "./../containers/Catalog";
import Chairs from "./UI/Catalog/Chairs/Chairs";
import Swing from "./UI/Catalog/Swing/Swing";
import Braziers from "./UI/Catalog/Braziers/Braziers";
import Other from "./UI/Catalog/Other/Other";
import Gallery from "./UI/Gallery";
import Contacts from "./UI/Contacts";
import Payment from "./UI/Payment";
import Profile from "./UI/Profile"
import Footer from "./UI/Footer";
import Header from "./../containers/Header";
import Tables from "./UI/Catalog/Tables/Tables";
import Cart from "./../containers/Cart";
import axios from 'axios';


class App extends Component {

    componentDidMount() {
        const {setTables, setChairs, setSwing, setBraziers, setOther} = this.props;

        axios.get('/tables.json').then(({data}) => {
            setTimeout(() => setTables(data), 1000);
        })
        axios.get('/chairs.json').then(({data}) => {
            setTimeout(() => setChairs(data), 1000);
        })
        axios.get('/swing.json').then(({data}) => {
            setTimeout(() => setSwing(data), 1000);
        })
        axios.get('/braziers.json').then(({data}) => {
            setTimeout(() => setBraziers(data), 1000);
        })
        axios.get('/other.json').then(({data}) => {
            setTimeout(() => setOther(data), 1000);
        })
        setTables()
    }

    render() {
        const {tables, isReady, chairs, isReadyChairs, swing, isReadySwing,
            braziers, isReadyBraziers, other, isReadyOther} = this.props;

        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/catalog"
                           render={() => <Catalog tables={tables}
                                                  isReady={isReady}
                                                  chairs={chairs}
                                                  isReadyChairs={isReadyChairs}
                                                  swing={swing}
                                                  isReadySwing={isReadySwing}
                                                  braziers={braziers}
                                                  isReadyBraziers={isReadyBraziers}
                                                  other={other}
                                                  isReadyOther={isReadyOther}/>}
                    />
                    <Route exact path="/catalog/tables"
                           render={() => <Tables tables={tables}
                                                 isReady={isReady}/>}
                    />
                    <Route exact path="/catalog/chairs"
                           render={() => <Chairs chairs={chairs}
                                                 isReadyChairs={isReadyChairs}/>}
                    />
                    <Route exact path="/catalog/swing"
                           render={() => <Swing swing={swing}
                                                isReadySwing={isReadySwing}/>}
                    />
                    <Route exact path="/catalog/braziers"
                           render={() => <Braziers braziers={braziers}
                                                   isReadyBraziers={isReadyBraziers}/>}
                    />
                    <Route exact path="/catalog/other"
                           render={() => <Other other={other}
                                                isReadyOther={isReadyOther}/>}
                    />
                    <Route exact path="/gallery" component={Gallery}/>
                    <Route exact path="/payment" component={Payment}/>
                    <Route exact path="/contacts" component={Contacts}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Redirect to="/"/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default App;
