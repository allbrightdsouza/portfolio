import React, { Component } from "react";
import {ReactComponent as Copyright} from '../images/copyright.svg';
import {Container, Col, Row} from 'react-bootstrap';
import {ReactComponent as Email} from '../images/email.svg';
import {ReactComponent as Github} from '../images/giithub.svg';
import {ReactComponent as Linkedin} from '../images/linkedin.svg';

import '../App.css';

class BottomBar extends Component{
    render()
    {
        return(
            <Container className="bottom" fluid>
                <Row>
                    <Col xs={6}>                                                                        
                        <a href="mailto:allbrightdsouza7@gmail.com" target="_blank" rel="noopener noreferrer"><Email />  </a>
                        <a href="https://github.com/allbrightdsouza" target="_blank" rel="noopener noreferrer"><Github />  </a>
                        <a href="https://www.linkedin.com/in/allbrightdsouza/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>                                                    
                    </Col>
                    <Col>
                        <p className="light">Allbright Dsouza<br/>2020 <Copyright className="copyright"/></p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BottomBar;