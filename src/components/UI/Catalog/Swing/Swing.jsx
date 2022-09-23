import React, {useEffect} from "react";
import Breadcrumbs from "../../Breadcrumbs";
import "../../scss/style.scss"
import "../../scss/_global.scss"
import Sort from "../../../../containers/Sort";
import {Card} from "semantic-ui-react";
import ProductCard from "../../../../containers/ProductCard";

function Swing({swing, isReadySwing}) {

    const arrBc = [["/catalog", "/catalog/swing"], ["Каталог", "Качели"]];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <main className="main">

            <Breadcrumbs arrBc={arrBc}/>

            <section className="container">
                <div className="tables">
                    <Sort/>
                    <Card.Group itemsPerRow={4}>
                        {!isReadySwing
                            ? 'Загрузка...'
                            : swing.map((product) => <ProductCard key={product.id} {...product} />)
                        }
                    </Card.Group>
                </div>
            </section>

        </main>
    )
}

export default Swing;