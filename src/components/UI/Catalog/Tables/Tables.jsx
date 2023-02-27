import React, {useEffect} from "react";
import Breadcrumbs from "../../Breadcrumbs"
import Sort from "../../../../containers/Sort";
import "../../scss/style.scss"
import ProductCard from "../../../../containers/ProductCard";

const Tables = ({tables, isReady}) => {  //Страница с продукцией столов

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
        <main className="main">

            <Breadcrumbs arrBc={arrBc}/>

            <section className="container">
                <div className="tables">
                    <Sort/>
                    <div className='tables__items'>
                            {viewProduct()}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Tables;