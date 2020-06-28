import { Container, Card, Col, Row, ListGroup } from "react-bootstrap";
import React from 'react';

const skills = [
    {
        title: "Web Dev",
        items: [
            "HTML",
            "CSS",
            "JS",
            "React"
        ]
    },
    {
        title: "Programming",
        items: [
            "C++",
            "C#",
            "Python",
            "Java"
        ]
    },
]

const SkillsSection = () => {
    return (
        <>
        <Container id="skills-section">
            <h2 className="section-title title-dark"> My Skills </h2>
        </Container>
        { skills.map( (article,key) => {
            return (
                    <Card className="skills-card">
                        <Row>
                            <Col lg={8}>
                                <Card.Body>
                                    <Card.Title style={{fontStyle: "italic"}} className="skills-title">
                                        {article.title}
                                    </Card.Title>
                                    <Card.Text >
                                        <ListGroup horizontal="sm">
                                            {
                                                article.items.map((skill,key) => 
                                                    <ListGroup.Item>{skill}</ListGroup.Item>
                                                )
                                            }
                                        </ListGroup>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>);
            })}
    </>
    );
}

export default SkillsSection;