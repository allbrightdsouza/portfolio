import React from 'react';
import { Container, Image, Col, Row } from 'react-bootstrap';

const IntroSection = () => {
    return(
        <>
            <Container fluid id="intro-section">
                <h2>
                    Hi, I am Allbright Dsouza, and I am a graduate student at USC. I am currently pursuing MS in CS, and will be graduating in Spring 2021.
                    The one thing I love more than playing videogames is my girlfriend. Jk, I really like making videogames too. 
                    For the past one year   I have been exploring and learning about this vast field and it intrigues me everyday.
                </h2>
            </Container>
            <div className="my-image-container">
                <Row>
                    <Col>
                        <Image src={process.env.PUBLIC_URL+"/images/allbright.jpg"} id="my-photo" roundedCircle />
                    </Col>
                    <Col lg="8">
                        <Row id="name-section">
                            <Col xl="12" className="name">
                                <h2>Allbright D'Souza</h2>
                            </Col>
                            <Col className="name inverted">
                                <h2>Allbright D'Souza</h2>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </div>
        </>

    );
}

export default IntroSection;