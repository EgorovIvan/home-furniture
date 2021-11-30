import React from "react";
import Breadcrumbs from "../../Breadcrumbs";
import "../../scss/style.scss"
import "../../scss/_global.scss"
import Sort from "../../../../containers/Sort";
import {Card} from "semantic-ui-react";
import OtherCard from "./OtherСard";

const Other = ({other, isReadyOther}) => {

    const arrBc = [["/catalog", "/catalog/other"], ["Каталог", "Прочее"]];

    return (
        <div className="wrapper">
            <main className="main">

                <Breadcrumbs arrBc={arrBc}/>

                <section className="container">
                    <div className="tables">
                        <Sort/>
                        <Card.Group itemsPerRow={4}>
                            {!isReadyOther
                                ? 'Загрузка...'
                                : other.map((other, i) => <OtherCard key={i} {...other} />)
                            }
                        </Card.Group>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Other;