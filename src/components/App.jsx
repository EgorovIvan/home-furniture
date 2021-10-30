import React, {Component} from "react";
import './App.css';
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom"
import Main from "./UI/Main";
import Catalog from "./UI/Catalog/Catalog";
import Chairs from "./UI/Catalog/Chairs";
import Swing from "./UI/Catalog/Swing";
import Braziers from "./UI/Catalog/Braziers";
import Other from "./UI/Catalog/Other";
import Gallery from "./UI/Gallery";
import Contacts from "./UI/Contacts";
import Payment from "./UI/Payment";

import Footer from "./UI/Footer";
import Header from "./../containers/Header";
import Tables from "./UI/Catalog/Tables";

import axios from 'axios';

class App extends Component {
    componentDidMount() {
        const {setTables} = this.props;
        axios.get('/tables.json').then(({data}) => {
            setTimeout(() => setTables(data), 3000);
        })
    }

    render() {
        const {tables, isReady} = this.props;
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/catalog" component={Catalog}/>
                    <Route exact path="/catalog/tables"
                           render={() => <Tables tables={tables}
                                                 isReady={isReady}/>}
                    />
                    <Route exact path="/catalog/chairs" component={Chairs}/>
                    <Route exact path="/catalog/swing" component={Swing}/>
                    <Route exact path="/catalog/braziers" component={Braziers}/>
                    <Route exact path="/catalog/other" component={Other}/>
                    <Route exact path="/gallery" component={Gallery}/>
                    <Route exact path="/payment" component={Payment}/>
                    <Route exact path="/contacts" component={Contacts}/>
                    <Redirect to="/"/>
                </Switch>
                <Footer/>

            </BrowserRouter>
        )
    }

}

export default App;
