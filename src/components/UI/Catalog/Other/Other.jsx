import React, {useEffect} from "react";
import Breadcrumbs from "../../Breadcrumbs";
import "../../scss/style.scss"
import "../../scss/_global.scss"
import Sort from "../../../../containers/Sort";
import {Card} from "semantic-ui-react";
import ProductCard from "../../../../containers/ProductCard";

const Other = ({other, isReadyOther}) => {

    const arrBc = [["/catalog", "/catalog/other"], ["Каталог", "Прочее"]];

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
                        {!isReadyOther
                            ? 'Загрузка...'
                            : other.map((product) => <ProductCard key={product.id} {...product} />)
                        }
                    </Card.Group>
                </div>
            </section>
        </main>
    )
}

export default Other;