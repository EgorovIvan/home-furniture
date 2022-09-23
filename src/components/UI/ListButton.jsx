import React, {useState} from "react";
import './scss/style.scss';
import {Button, Container, ListGroup} from "react-bootstrap";
import Leftmenu from "./Leftmenu";

const ListButton = (props) => {
    return (
        <Container>
            <Button onClick={props.openFormNav}
                    className="header__button btn-icon">
                <svg className="icon" width="32" height="23" viewBox="0 0 32 23"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z"/>
                </svg>
            </Button>
            {props.showFormNav && <Leftmenu closeFormNav={props.closeFormNav}/>}
        </Container>
    );
}

export default ListButton;