import React, {useEffect} from "react";
import Breadcrumbs from "../Breadcrumbs";
import "../scss/style.scss"
import Sort from "../../../containers/Sort";
import ProductCard from "../../../containers/ProductCard";

const Other = ({other, isReadyOther}) => {

    const arrBc = [["/catalog", "/catalog/other"], ["Каталог", "Прочее"]];

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function viewProduct() {
        try {
            return !isReadyOther
                ? 'Загрузка...'
                : other.map((product) => <ProductCard key={product.id}
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

export default Other;