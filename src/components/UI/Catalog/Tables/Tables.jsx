import React, {useEffect, useState} from "react";
import {Card} from "semantic-ui-react";
import Breadcrumbs from "../../Breadcrumbs"
import Sort from "../../../../containers/Sort";
import "../../scss/style.scss"
import "../../scss/_global.scss"
import ProductCard from "../../../../containers/ProductCard";


const Tables = ({tables, isReady }) => {  //Страница с продукцией столов

    const arrBc = [["/catalog", "/catalog/tables"], ["Каталог", "Столы"]];

    //возврат в начало страницы
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function viewProduct() {
        try {
            return !isReady
                ? 'Загрузка...'
                : tables.map((product) => <ProductCard key={product.id}
                                                       {...product} />)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="main" >

            <Breadcrumbs arrBc={arrBc}/>

            <section className="container">
                <div className="tables">
                    <Sort/>
                    <Card.Group itemsPerRow={4}>
                        {viewProduct()}
                    </Card.Group>
                </div>
            </section>
        </main>
    )
}

export default Tables;