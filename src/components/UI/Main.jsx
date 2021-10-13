import React from "react"
import "./scss/style.scss"
import "./scss/_global.scss"
import TopSlider from "./Slider/TopSlider";
import ProductSlider from "./Slider/ProductSlider";

function Main() {

    return (
        <div className="wrapper">
            <main className="main">
                <div className="container">
                    <section className="top">
                        <div className="top__inner">

                            <TopSlider />

                        </div>
                    </section>
                    <section className="new-products">
                        <h3 className="new-products__title">
                            Новая продукция
                        </h3>
                        <div className="wrapper-products">

                            <ProductSlider />

                        </div>


                    </section>

                </div>
            </main>
        </div>
    );

};

export default Main;