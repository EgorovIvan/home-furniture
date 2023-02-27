import React, {Component} from "react";
import './App.css';
import {Route, BrowserRouter, Routes} from "react-router-dom"
import Header from "./../containers/Header";
import Main from "./UI/Main";
import Footer from "./UI/Footer";
import NotFound from "./UI/NotFound";
import Catalog from "./../containers/Catalog";
import Tables from "./UI/catalog/Tables/Tables";
import Chairs from "./UI/catalog/Chairs/Chairs";
import Swing from "./UI/catalog/Swing/Swing";
import Braziers from "./UI/catalog/Braziers/Braziers";
import Other from "./UI/catalog/Other/Other";
import Gallery from "./UI/Gallery";
import Contacts from "./UI/Contacts";
import Payment from "./UI/Payment";
import Profile from "./UI/Profile"
import Cart from "./../containers/Cart";
import axios from 'axios';


class App extends Component {
    componentDidMount() {

        const {setTables, setChairs, setSwing, setBraziers, setOther} = this.props;

        axios.get('/chairs.json').then(({data}) => {
            setTimeout(() => setTables(data), 100);
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
    }

    render() {
        const {tables, isReady, chairs, isReadyChairs, swing, isReadySwing,
            braziers, isReadyBraziers, other, isReadyOther} = this.props;

        return (
            <BrowserRouter>

                <Header/>
                <Routes>
                    <Route exact path="/" element={<Main/>}/>
                    <Route exact path="/catalog"
                           element={<Catalog tables={tables}
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
                           element={<Tables tables={tables}
                                            isReady={isReady}/>}
                    />
                    <Route exact path="/catalog/chairs"
                           element={<Chairs chairs={chairs}
                                                 isReadyChairs={isReadyChairs}/>}
                    />
                    <Route exact path="/catalog/swing"
                           element={<Swing swing={swing}
                                                isReadySwing={isReadySwing}/>}
                    />
                    <Route exact path="/catalog/braziers"
                           element={<Braziers braziers={braziers}
                                                   isReadyBraziers={isReadyBraziers}/>}
                    />
                    <Route exact path="/catalog/other"
                           element={<Other other={other}
                                                isReadyOther={isReadyOther}/>}
                    />
                    <Route exact path="/gallery" element={<Gallery/>}/>
                    <Route exact path="/contacts" element={<Contacts/>}/>
                    <Route exact path="/payment" element={<Payment/>}/>
                    <Route exact path="/profile" element={<Profile/>}/>
                    <Route exact path="/cart" element={<Cart/>}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        )
    }
}

export default App;
