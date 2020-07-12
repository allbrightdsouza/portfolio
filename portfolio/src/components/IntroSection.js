import React from 'react';
import { Container, Image, Col, Row } from 'react-bootstrap';
import {ReactComponent as Email} from '../images/email.svg';
import {ReactComponent as Github} from '../images/giithub.svg';
import {ReactComponent as Linkedin} from '../images/linkedin.svg';

const IntroSection = () => {
    return(
        <>
            <Container fluid id="intro-section">
                <p>
                    Hi, I am Allbright Dsouza, and I am a graduate student at USC. I am currently pursuing MS in CS, and will be graduating in Spring 2021. I love playing games but get an even greater thrill making them. 
                </p>
                <p>
                    I think games are an excelent medium of entertainment with the ability to immerse its audience and impact their lifes. So I strive to make games that engage the player both mentally and emotionally. 
                </p>
                <p>
                    I am also Full Stack developer.
                </p>
            </Container>
            <Container className="my-image-container" fluid>
                <Row fluid>
                    <Col xs={5} md={3}>
                        <Image src={process.env.PUBLIC_URL+"/images/allbright.jpg"} id="my-photo" roundedCircle />
                    </Col>
                    <Col xs={7} md={6}>
                        <Row>                            
                            <Col className="name name-section">                             
                                <p>Allbright D'Souza</p>
                                <span className="name inverted"><p>Allbright D'Souza</p></span>                                                                                                                    
                            </Col>                                                                                    
                        </Row>
                    </Col>
                    <Col className="social-icons my-auto">                        
                        <a href="mailto:allbrightdsouza7@gmail.com" target="_blank" rel="noopener noreferrer"><Email />  </a>
                        <a href="https://github.com/allbrightdsouza" target="_blank" rel="noopener noreferrer"><Github />  </a>
                        <a href="https://www.linkedin.com/in/allbrightdsouza/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
                    </Col>
                </Row>
                
            </Container>
        </>

    );
}

export default IntroSection;