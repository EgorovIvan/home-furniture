import React, {useState} from "react";
import Breadcrumbs from "./Breadcrumbs"
import "./scss/style.scss"


const Gallery = () => {

    const arrBc = [["/gallery", ""], ["Галерея ", ""]];

    const [state, setState] = useState("office")

    const bedroomOpen = () => setState("bedroom")
    const livingOpen = () => setState("living")
    const officeOpen = () => setState("office")
    const diningOpen = () => setState("dining")
    const chairOpen = () => setState("chair")

    return (
        <main className="main">
            <Breadcrumbs arrBc={arrBc}/>

            <div className="container">
                <div className="gallery gallery-page">
                    <div className="gallery__buttons">
                        <button className={(!(state === "bedroom") ? "gallery__btn" : "gallery__btn-active")}
                                onClick={bedroomOpen}>
                            Мебель для спальни
                        </button>
                        <button className={(!(state === "living") ? "gallery__btn" : "gallery__btn-active")}
                                onClick={livingOpen}>
                            Мебель для гостиной
                        </button>
                        <button className={(!(state === "office") ? "gallery__btn" : "gallery__btn-active")}
                                onClick={officeOpen}>
                            Офисная мебель
                        </button>
                        <button className={(!(state === "dining") ? "gallery__btn" : "gallery__btn-active")}
                                onClick={diningOpen}>
                            Мебель для столовой
                        </button>
                        <button className={(!(state === "chair") ? "gallery__btn" : "gallery__btn-active")}
                                onClick={chairOpen}>
                            Прочее
                        </button>
                    </div>
                    <div>
                        {(() => {
                            switch (state) {
                                case
                                "bedroom"
                                :
                                    return <section>
                                        {/*<Zoom bottom>*/}
                                        <div className="gallery__items">
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/2.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/1.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/3.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/4.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/5.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/6.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/7.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/8.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/9.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/10.jpg" alt=""/>
                                            </a>
                                        </div>
                                        {/*</Zoom>*/}
                                    </section>
                                case
                                "living"
                                :
                                    return <div>
                                        {/*<Zoom bottom>*/}
                                        <div className="gallery__items">
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/6.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/7.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/8.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/9.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/10.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/1.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/2.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/3.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/4.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/5.jpg" alt=""/>
                                            </a>
                                        </div>
                                        {/*</Zoom>*/}
                                    </div>
                                case
                                "office"
                                :
                                    return <div>
                                        {/*  <Zoom bottom> */}
                                        <div className="gallery__items">
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/3.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/2.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/1.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/4.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/5.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/6.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/7.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/8.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/9.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/10.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>

                                case
                                "dining"
                                :
                                    return <nav>
                                        {/* <Zoom bottom>*/}
                                        <div className="gallery__items">
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/4.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/7.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/6.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/9.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/10.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/1.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/2.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/3.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/8.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/5.jpg" alt=""/>
                                            </a>
                                        </div>
                                        {/*</Zoom>*/}
                                    </nav>
                                case
                                "chair"
                                :
                                    return <article>
                                        {/*<Zoom bottom>*/}
                                        <div className="gallery__items">
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/8.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/2.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/3.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/1.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/5.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/6.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/7.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/4.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/9.jpg" alt=""/>
                                            </a>
                                            <a className="gallery__item" href="/">
                                                <img src="../images/gallery/10.jpg" alt=""/>
                                            </a>
                                        </div>
                                        {/*</Zoom>*/}
                                    </article>
                                default:
                                    break
                            }
                        })(state)}
                    </div>
                </div>
            </div>
        </main>
    )

}

export default Gallery;