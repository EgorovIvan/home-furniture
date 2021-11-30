import React, {useState} from "react";
import './scss/style.scss';
import {Button, Container, ListGroup} from "react-bootstrap";
import {CSSTransition} from "react-transition-group";
import Leftmenu from "./Leftmenu";

const ListButton = () => {
    const [showMessage, setShowMessage] = useState(false);
    return (
        <Container>

            <Button onClick={() => setShowMessage(true)} className="header__btn-menu">
                <div className="header__btn-menu-item">
                    <div>
                        <span className="header__btn-menu-point"></span>
                        <span className="header__btn-menu-point"></span>
                        <span className="header__btn-menu-point"></span>
                    </div>
                    <div>
                        <span className="header__btn-menu-line"></span>
                        <span className="header__btn-menu-line"></span>
                        <span className="header__btn-menu-line"></span>
                    </div>
                </div>
            </Button>

            <CSSTransition
                in={showMessage}
                timeout={400}
                classNames="alert"
                unmountOnExit
            >
                <ListGroup>
                    <Leftmenu setShowMessage={setShowMessage}/>
                </ListGroup>
            </CSSTransition>
        </Container>
    );
}

export default ListButton;