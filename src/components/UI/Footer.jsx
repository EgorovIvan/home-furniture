import React from "react";
import "./scss/style.scss";
import "./scss/_global.scss";

const Footer = () => {
    return (
        <footer className="footer">

            <hr className="line"/>

            <div className="container">
                <div className="footer__content">
                    <div className="footer__inner">
                        <div className="footer__info">
                            <h5 className="footer__title">Home Furniture</h5>
                            <p className="footer__text">
                                МАГАЗИН МЕБЕЛИ ДЛЯ ДОМА
                            </p>
                        </div>
                        <div className="footer__social">
                            <ul className="footer__list">
                                <li className="footer__item">
                                    <a className="footer__link link-icon" href="https://www.instagram.com/">
                                        <svg className="icon-svg" enableBackground="new 0 0 128 128"
                                             viewBox="0 0 128 128"
                                             width="36" height="36">
                                            <g id="_x37__stroke">
                                                <g id="Instagram_1_">
                                                    <rect clipRule="evenodd" fill="none" fillRule="evenodd" height="128"
                                                          width="128"/>
                                                    <radialGradient cx="19.1111" cy="128.4444"
                                                                    gradientUnits="userSpaceOnUse"
                                                                    id="Instagram_2_" r="163.5519">
                                                        <stop offset="0" style={{stopColor: "#FFB140"}}/>
                                                        <stop offset="0.2559" style={{stopColor: "#FF5445"}}/>
                                                        <stop offset="0.599" style={{stopColor: "#FC2B82"}}/>
                                                        <stop offset="1" style={{stopColor: "#8E40B7"}}/>
                                                    </radialGradient>
                                                    <path clipRule="evenodd"
                                                          d="M105.843,29.837    c0,4.242-3.439,7.68-7.68,7.68c-4.241,0-7.68-3.438-7.68-7.68c0-4.242,3.439-7.68,7.68-7.68    C102.405,22.157,105.843,25.595,105.843,29.837z M64,85.333c-11.782,0-21.333-9.551-21.333-21.333    c0-11.782,9.551-21.333,21.333-21.333c11.782,0,21.333,9.551,21.333,21.333C85.333,75.782,75.782,85.333,64,85.333z M64,31.135    c-18.151,0-32.865,14.714-32.865,32.865c0,18.151,14.714,32.865,32.865,32.865c18.151,0,32.865-14.714,32.865-32.865    C96.865,45.849,82.151,31.135,64,31.135z M64,11.532c17.089,0,19.113,0.065,25.861,0.373c6.24,0.285,9.629,1.327,11.884,2.204    c2.987,1.161,5.119,2.548,7.359,4.788c2.24,2.239,3.627,4.371,4.788,7.359c0.876,2.255,1.919,5.644,2.204,11.884    c0.308,6.749,0.373,8.773,0.373,25.862c0,17.089-0.065,19.113-0.373,25.861c-0.285,6.24-1.327,9.629-2.204,11.884    c-1.161,2.987-2.548,5.119-4.788,7.359c-2.239,2.24-4.371,3.627-7.359,4.788c-2.255,0.876-5.644,1.919-11.884,2.204    c-6.748,0.308-8.772,0.373-25.861,0.373c-17.09,0-19.114-0.065-25.862-0.373c-6.24-0.285-9.629-1.327-11.884-2.204    c-2.987-1.161-5.119-2.548-7.359-4.788c-2.239-2.239-3.627-4.371-4.788-7.359c-0.876-2.255-1.919-5.644-2.204-11.884    c-0.308-6.749-0.373-8.773-0.373-25.861c0-17.089,0.065-19.113,0.373-25.862c0.285-6.24,1.327-9.629,2.204-11.884    c1.161-2.987,2.548-5.119,4.788-7.359c2.239-2.24,4.371-3.627,7.359-4.788c2.255-0.876,5.644-1.919,11.884-2.204    C44.887,11.597,46.911,11.532,64,11.532z M64,0C46.619,0,44.439,0.074,37.613,0.385C30.801,0.696,26.148,1.778,22.078,3.36    c-4.209,1.635-7.778,3.824-11.336,7.382C7.184,14.3,4.995,17.869,3.36,22.078c-1.582,4.071-2.664,8.723-2.975,15.535    C0.074,44.439,0,46.619,0,64c0,17.381,0.074,19.561,0.385,26.387c0.311,6.812,1.393,11.464,2.975,15.535    c1.635,4.209,3.824,7.778,7.382,11.336c3.558,3.558,7.127,5.746,11.336,7.382c4.071,1.582,8.723,2.664,15.535,2.975    C44.439,127.926,46.619,128,64,128c17.381,0,19.561-0.074,26.387-0.385c6.812-0.311,11.464-1.393,15.535-2.975    c4.209-1.636,7.778-3.824,11.336-7.382c3.558-3.558,5.746-7.127,7.382-11.336c1.582-4.071,2.664-8.723,2.975-15.535    C127.926,83.561,128,81.381,128,64c0-17.381-0.074-19.561-0.385-26.387c-0.311-6.812-1.393-11.464-2.975-15.535    c-1.636-4.209-3.824-7.778-7.382-11.336c-3.558-3.558-7.127-5.746-11.336-7.382c-4.071-1.582-8.723-2.664-15.535-2.975    C83.561,0.074,81.381,0,64,0z"
                                                          fill="url(#Instagram_2_)" fillRule="evenodd" id="Instagram"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link link-icon" href="https://vk.com/georgi_a">
                                        <svg className="icon-svg" viewBox="0 0 64 64"
                                             width="36" height="36">
                                            <title/>
                                            <g data-name="32-vk" id="_32-vk">
                                                <rect className="cls-1" height="64" rx="11.2" ry="11.2" width="64"/>
                                                <path className="cls-2"
                                                      d="M9.62,19.77H17.3a.79.79,0,0,1,.74.51c.85,2.19,4.38,10.76,7.61,11.46,2.4,0,1.55-11.4-1.5-11.4-.8,0,1.42-1.42,1.57-1.48a16.38,16.38,0,0,1,8.66,0c1.53.64,1.79,2.43,1.83,3.95s-1.7,8,.59,8.7c3,.92,6.86-8.49,7.76-10.8a.79.79,0,0,1,.74-.5h8.55a.8.8,0,0,1,.74,1.11,74.74,74.74,0,0,1-6.31,11.52,1.59,1.59,0,0,0,.16,2C51,37.58,58,45.34,54,45.34H45.37a1.57,1.57,0,0,1-1.18-.53c-1.34-1.48-5.24-5.6-7-5.27-1.46.27-1.6,2.75-1.53,4.37a1.6,1.6,0,0,1-1.48,1.68c-1.53.09-3.62.13-3.81.12-6.1-.39-9.71-4.46-13.16-9A56.33,56.33,0,0,1,8.86,20.83.81.81,0,0,1,9.62,19.77Z"/>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link link-icon" href="https://www.whatsapp.com/">
                                        <svg className="icon-svg" height="36" style={{
                                            shapeRendering: "geometricPrecision",
                                            textRendering: "geometricPrecision",
                                            imageRendering: "optimizeQuality",
                                            fillRule: "evenodd",
                                            clipRule: "evenodd"
                                        }}
                                             viewBox="0 0 643 643" width="36">
                                            <g id="Layer_x0020_1">
                                                <g id="_444245648">
                                                    <rect className="wil0" height="643" rx="69" ry="69" width="643"/>
                                                    <path className="wil1"
                                                          d="M325 100c120,0 217,97 217,216 0,120 -97,217 -217,217 -38,0 -75,-10 -106,-27l0 0 -118 37 37 -116 0 0c-19,-32 -30,-70 -30,-111 0,-119 97,-216 217,-216zm-50 200c0,0 16,26 42,47 26,20 40,24 40,24 0,0 23,-29 26,-29 3,-1 23,8 32,13 8,4 20,11 20,14 0,2 -1,20 -7,27 -6,6 -23,22 -39,20 -78,-6 -150,-77 -163,-129 -2,-9 -1,-44 6,-53 8,-9 13,-15 23,-16 10,-1 16,0 19,7 4,7 19,41 20,45 1,4 -20,24 -19,30zm-31 178l0 0c24,12 52,19 81,19 100,0 180,-81 180,-181 0,-99 -80,-180 -180,-180 -100,0 -181,81 -181,180 0,39 13,75 33,104l0 0 0 0 0 0 0 0 -20 69 69 -21 18 10z"/>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                                <li className="footer__item">
                                    <a className="footer__link link-icon" href="https://www.youtube.com/c/vdud">
                                        <svg className="icon-svg" width="36" height="36"
                                             style={{
                                                 shapeRendering: "geometricPrecision",
                                                 textRendering: "geometricPrecision",
                                                 imageRendering: "optimizeQuality",
                                                 fillRule: "evenodd",
                                                 clipRule: "evenodd"
                                             }} viewBox="0 0 225 225">
                                            <defs>
                                            </defs>
                                            <g id="Layer_x0020_1">
                                                <g id="_445042792">
                                                    <rect className="fil0" height="225" rx="24" ry="24" width="225"/>
                                                    <polygon
                                                        className="fil1"
                                                        points="88,71 124,92 161,113 124,133 88,154 88,113 "/>
                                                </g>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

