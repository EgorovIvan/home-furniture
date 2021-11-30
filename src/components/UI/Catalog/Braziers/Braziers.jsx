import React from "react";
import Breadcrumbs from "../../Breadcrumbs";
import "../../scss/style.scss"
import "../../scss/_global.scss"
import Sort from "../../../../containers/Sort";
import {Card} from "semantic-ui-react";
import BraziersCard from "./BraziersCard";

const Braziers = ({braziers, isReadyBraziers}) => {

    const arrBc = [["/catalog", "/catalog/braziers"], ["Каталог", "Мангалы"]];

    return (
        <div className="wrapper">
            <main className="main">

                <Breadcrumbs arrBc={arrBc}/>

                <section className="container">
                    <div className="tables">
                        <Sort/>
                        <Card.Group itemsPerRow={4}>
                            {!isReadyBraziers
                                ? 'Загрузка...'
                                : braziers.map((brazier, i) => <BraziersCard key={i} {...brazier} />)
                            }
                        </Card.Group>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Braziers;