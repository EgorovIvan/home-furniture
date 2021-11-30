import React from "react";
import Breadcrumbs from "../../Breadcrumbs";
import "../../scss/style.scss"
import "../../scss/_global.scss"
import Sort from "../../../../containers/Sort";
import {Card} from "semantic-ui-react";
import SwingCard from "./SwingСard";

function Swing({swing, isReadySwing}) {

    const arrBc = [["/catalog", "/catalog/swing"], ["Каталог", "Качели"]];

    return (
        <div className="wrapper">
            <main className="main">

                <Breadcrumbs arrBc={arrBc}/>

                <section className="container">
                    <div className="tables">
                        <Sort/>
                        <Card.Group itemsPerRow={4}>
                            {!isReadySwing
                                ? 'Загрузка...'
                                : swing.map((swing, i) => <SwingCard key={i} {...swing} />)
                            }
                        </Card.Group>
                    </div>
                </section>

            </main>
        </div>
    )
}

export default Swing;