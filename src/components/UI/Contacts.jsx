import React from "react";
import Iframe from "react-iframe";
import Breadcrumbs from "./Breadcrumbs";

function Contacts() {

    const arrBc = [["/contacts", ""], ["Контакты", ""]];

    return (
        <main className="main">

            <Breadcrumbs arrBc={arrBc}/>

                <div className="container">
                    <div className="map">
                        <Iframe
                            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d8929.36751089592!2d52.320221!3d55.978106!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1633941058786!5m2!1sru!2sru"
                            width="100%" style={{border:"0", allowFullScreen:"", loading:"lazy"}}/>
                    </div>
                </div>
        </main>
    )
}

export default Contacts;