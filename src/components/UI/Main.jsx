import React from "react"
import "./scss/style.scss"
import TopSlider from "./sliders/TopSlider"
import ProductSlider from "./sliders/ProductSlider"

function Main() {

    return (
        <main className="main">
            <div className="container">
                <section className="top">
                    <div className="top__inner">
                        <TopSlider/>
                    </div>
                </section>
                <section className="new-products">
                    <h3 className="new-products__title">
                        Новая продукция
                    </h3>
                    <div className="wrapper-products">
                        <ProductSlider/>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Main;