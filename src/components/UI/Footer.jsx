import React from "react";
import "./scss/style.scss";
import "./scss/_global.scss";

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer__content">
                    <div className="container">
                        <div className="footer__inner">
                            <div className="footer__info">
                                <h5 className="footer__info-title">Home Furniture</h5>
                                <p className="footer__info-text">
                                    МАГАЗИН МЕБЕЛИ ДЛЯ ДОМА
                                </p>
                                <p className="footer__info-number">
                                    +7 (906) 121-68-99
                                </p>
                                <a className="info-email" href="mailto:ouremailaddress@email.com">
                                    company_email_address@email.com
                                </a>
                                <form action="" className="footer__form">
                                    <input className="footer__form-input" type="email" placeholder="Ваш email" />
                                        <button className="footer__form-button" type="submit">Подписаться</button>
                                </form>
                            </div>
                            <ul className="footer__social">
                                <li className="footer__social-item">
                                    <a className="footer__social-link footer__social-link--instagram" href="#">
                                        <img src="./../images/social/instagram.png" alt="icon" />Instagram</a>
                                </li>
                                <li className="footer__social-item">
                                    <a className="footer__social-link footer__social-link--youtobe" href="#">
                                        <img src="./../images/social/youtobe.png" alt="icon"/>Youtobe</a>
                                </li>
                                <li className="footer__social-item">
                                    <a className="footer__social-link footer__social-link--vkontakte" href="#">
                                        <img src="./../images/social/vkontakte.png" alt="icon"/>VKontakte</a>
                                </li>
                                <li className="footer__social-item ">
                                    <a className="footer__social-link footer__social-link--whatsapp" href="#">
                                        <img src="./../images/social/whatsapp.png" alt="icon"/>Whatsapp</a>
                                </li>
                                <li className="footer__social-item">
                                    <a className="footer__social-link footer__social-link--viber" href="#">
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

