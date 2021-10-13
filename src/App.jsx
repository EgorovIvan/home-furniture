import React from "react";
import './App.css';
import {Route, BrowserRouter, Switch, Redirect} from "react-router-dom"
import Main from "./components/UI/Main";
import Catalog from "./components/UI/Catalog/Catalog";
import Chairs from "./components/UI/Catalog/Chairs";
import Swing from "./components/UI/Catalog/Swing";
import Braziers from "./components/UI/Catalog/Braziers";
import Other from "./components/UI/Catalog/Other";
import Gallery from "./components/UI/Gallery";
import Contacts from "./components/UI/Contacts";
import Payment from "./components/UI/Payment";

import Footer from "./components/UI/Footer";
import Header from "./components/UI/Header";
import Tables from "./components/UI/Catalog/Tables";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/catalog" component={Catalog} />
                <Route exact path="/catalog/tables" component={Tables} />
                <Route exact path="/catalog/chairs" component={Chairs} />
                <Route exact path="/catalog/swing" component={Swing} />
                <Route exact path="/catalog/braziers" component={Braziers} />
                <Route exact path="/catalog/other" component={Other} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/payment" component={Payment} />
                <Route exact path="/contacts" component={Contacts} />

                <Redirect to="/" />
            </Switch>
            <Footer />

        </BrowserRouter>
    );
}

export default App;
