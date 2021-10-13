import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {BrowserRouter} from "react-router-dom";

function Home() {

    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Home;