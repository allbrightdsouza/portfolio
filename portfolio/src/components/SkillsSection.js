import { Container, Card, Col, Row, ListGroup } from "react-bootstrap";
import React from 'react';

const skills = [
    {
        title: "Frameworks",
        items: [
            "Unity",
            "Android",
            "Maya"            
        ]
    },
    {
        title: "Web Dev",
        items: [
            "HTML",
            "CSS",
            "JS",
            "React",
            "Node"
        ]
    },
    {
        title: "DBMS",
        items: [
            "SQL",
            "Mongo"                       
        ]
    },
    {
        title: "Languages",
        items: [
            "C++",
            "C#",
            "Python",
            "Java"
        ]
    },
    {
        title: "Misc",
        items: [
            "Git",
            "Perforce",
            "REST APIs",            
        ]
    },
]

const SkillsSection = () => {
    return (
        <>
        <Container id="skills-section">
            <h1 className="section-title title-dark header"> My Skills </h1>
        </Container>
        { skills.map( (article,key) => {
            return (
                    <Card className="skills-card">
                        {/* <Row> */}
                            {/* <Col lg={8}> */}
                                <Card.Body>
                                    <Row>
                                        <Col xs={4} md={4} lg={4} className="skills-title-col">
                                            <Card.Title className="skills-title">
                                                {article.title}
                                            </Card.Title>
                                        </Col>
                                        <Col xs={8} md={8} lg={8} className="skills">
                                            <Card.Text className = "skills-text">
                                                {article.items.join(", ")}
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            {/* </Col> */}
                        {/* </Row> */}
                    </Card>);
            })}
    </>
    );
}

export default SkillsSection;