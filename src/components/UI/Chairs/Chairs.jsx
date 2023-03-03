import React, {useEffect} from "react"
import Breadcrumbs from "../Breadcrumbs"
import ProductCard from "../../../containers/ProductCard"
import Sort from "../../../containers/Sort"
import "../scss/style.scss"

const Chairs = ({chairs, isReadyChairs}) => {

    const arrBc = [["/catalog", "/catalog/chairs"], ["Каталог", "Стулья"]]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    function viewProduct() {
        try {
            return !isReadyChairs
                ? 'Загрузка...'
                : chairs.map((product) => <ProductCard key={product.id}
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

export default Chairs;