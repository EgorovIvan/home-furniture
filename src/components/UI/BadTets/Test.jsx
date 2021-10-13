import React, {useState} from "react";
import ReactDOM from 'react-dom';
import {Container, ListGroup, Button, Alert} from 'react-bootstrap';
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

import '../scss/style.scss';



function Test() {

    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    return (
        <Container style={{ paddingTop: '2rem' }}>
            {showButton && (
                <Button
                    onClick={() => setShowMessage(true)}
                    size="lg"
                >
                    Show Message
                </Button>
            )}
            <CSSTransition
                in={showMessage}
                timeout={300}
                classNames="alert"
                unmountOnExit
                onEnter={() => setShowButton(false)}
                onExited={() => setShowButton(true)}
            >
                <Alert
                    variant="primary"
                    dismissible
                    onClose={() => setShowMessage(false)}
                >
                    <Alert.Heading>
                        Animated alert message
                    </Alert.Heading>
                    <p>
                        This alert message is being transitioned in and
                        out of the DOM.
                    </p>
                    <Button onClick={() => setShowMessage(false)}>
                        Close
                    </Button>
                </Alert>
            </CSSTransition>
        </Container>
    );
}

export default Test;

// import React, {useState, useEffect} from "react";
// import "./TopSlider.module.scss";
// import slide1 from "../../images/top/1.jpg";
// import slide2 from "../../images/top/2.jpeg";
// import slide3 from "../../images/top/3.jpg";
//
// const img = [
//     <img key={slide1} src={slide1}/>,
//     <img key={slide2} src={slide2}/>,
//     <img key={slide3} src={slide3}/>,
// ];
//
// function TopSlider() {
//     const [activeIndex, setActiveIndex] = useState(0);
//
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setActiveIndex((current) => {
//                 const res = current === img.length - 1 ? 0 : current + 1;
//                 return res
//             })
//         }, 10000)
//         return () => clearInterval()
//     }, [])
//
//     return (
//         <div className="slider">
//             <div className="slider-img"
//                  key={activeIndex}>
//                 {img[activeIndex]}
//             </div>
//         </div>
//     )
// }
//
// export default TopSlider;