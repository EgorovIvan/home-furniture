import React from "react"
import {NavLink} from "react-router-dom"
import TextField from "@mui/material/TextField"
import Button from '@mui/material/Button';
import './scss/style.scss'
import "./scss/_global.scss"


function Profile() {

    return (
        <div className="wrapper">
            <main className="main">
                <div className="breadcrumbs">
                    <div className="container">
                        <ul className="breadcrumbs__links">
                            <li className="breadcrumbs__item">
                                <NavLink className="breadcrumbs_link" to={"/"}>Главная</NavLink>
                            </li>
                            <li className="breadcrumbs__item">
                                <span className="breadcrumbs_link">Профиль</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <section className="container">
                    <div className="chat">
                        <div>
                            <h1>
                                TEST
                            </h1>
                        </div>
                        <div onChange="chat__box">
                            <div className="chat__message">
                                <p>Message</p>
                            </div>
                            <div className="chat__input">
                                <TextField
                                    fullWidth
                                    id="outlined-multiline-static"
                                    label=""
                                    multiline
                                    rows={4}
                                    placeholder="Текст сообщения"

                                />
                                <Button>Отправить</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
}

export default Profile;