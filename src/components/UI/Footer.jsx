import React from "react";
import "./scss/style.scss";
import "./scss/_global.scss";

function Footer() {
    return (
        <div className="wrapper">
            <footer className="footer">

                <hr className="line"/>

                <div className="footer__content">
                    <div className="container">
                        <div className="footer__inner">
                            <div className="footer__info">
                                <h5 className="footer__info-title">Home Furniture</h5>
                                <p className="footer__info-text">
                                    МАГАЗИН МЕБЕЛИ ДЛЯ ДОМА
                                </p>
                                <p className="footer__info-number">
                                    Контактный номер: +7 (963) 972-11-95
                                </p>

                            </div>
                            <ul className="footer__social">
                                <li className="footer__social-item">
                                    <a className="footer__social-link footer__social-link--instagram" href="/">
                                        <img src="./../images/social/instagram.png" alt="icon" />Instagram</a>
                                </li>
                                <li className="footer__social-item">
                                    <a className="footer__social-link footer__social-link--youtobe"
                                       href="https://www.youtube.com/channel/UCS6H2VDWeGvepDxcxx-6aYw" target="_blank">
                                        <img src="./../images/social/youtobe.png" alt="icon"/>Youtobe</a>
                                </li>
                                <li className="footer__social-item">
                                    <a className="footer__social-link footer__social-link--vkontakte" href="/">
                                        <img src="./../images/social/vkontakte.png" alt="icon"/>VKontakte</a>
                                </li>
                                <li className="footer__social-item ">
                                    <a className="footer__social-link footer__social-link--whatsapp" href="/">
                                        <img src="./../images/social/whatsapp.png" alt="icon"/>Whatsapp</a>
                                </li>
                                <li className="footer__social-item">
                                    <a className="footer__social-link footer__social-link--viber" href="/">
                                        <img src="./../images/social/viber.png" alt="icon"/>Viber</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

