import React, {useEffect} from "react"
import Breadcrumbs from "../../Breadcrumbs"
import ProductCard from "../../../../containers/ProductCard";
import Sort from "../../../../containers/Sort";
import "../../scss/style.scss"
import "../../scss/_global.scss"
import {Card} from "semantic-ui-react"

const Chairs = ({chairs, isReadyChairs}) => {

    const arrBc = [["/catalog", "/catalog/chairs"], ["Каталог", "Стулья"]]

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
                        {!isReadyChairs
                            ? 'Загрузка...'
                            : chairs.map((product) => <ProductCard key={product.id} {...product} />)
                        }
                    </Card.Group>
                </div>
            </section>
        </main>
    )
}

export default Chairs;