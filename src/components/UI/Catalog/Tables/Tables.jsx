import React from "react";
import {Card} from "semantic-ui-react";
import Breadcrumbs from "../../Breadcrumbs"
import TableCard from "../../../../containers/TableCard";
import Sort from "../../../../containers/Sort";
import "../../scss/style.scss"
import "../../scss/_global.scss"


const Tables = ({tables, isReady}) => {  //Страница с продукцией столов

    const arrBc = [["/catalog", "/catalog/tables"], ["Каталог", "Столы"]];

    return (
        <div className="wrapper">
            <main className="main">

                <Breadcrumbs arrBc={arrBc}/>

                <section className="container">
                    <div className="tables">
                        <Sort/>
                        <Card.Group itemsPerRow={4}>
                            {!isReady
                                ? 'Загрузка...'
                                : tables.map((table, i) => <TableCard key={i} {...table} />)
                            }
                        </Card.Group>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Tables;