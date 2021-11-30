import React from "react"
import Breadcrumbs from "../../Breadcrumbs"
import ChairsCard from "./ChairsСard"
import Sort from "../../../../containers/Sort";
import "../../scss/style.scss"
import "../../scss/_global.scss"
import {Card} from "semantic-ui-react"

const Chairs = ({chairs, isReadyChairs}) => {

    const arrBc = [["/catalog", "/catalog/chairs"], ["Каталог", "Стулья"]]

    return (
        <div className="wrapper">
            <main className="main">

                <Breadcrumbs arrBc={arrBc}/>

                <section className="container">
                    <div className="tables">
                        <Sort/>
                        <Card.Group itemsPerRow={4}>
                            {!isReadyChairs
                                ? 'Загрузка...'
                                : chairs.map((chair, i) => <ChairsCard key={i} {...chair} />)
                            }
                        </Card.Group>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Chairs;