import React from 'react';
import {Card, Image} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const ArticleCards = (props) => {
    const articles = props.articles;

    const RedirectToArticle = (article) => {
        props.history.push({
            // pathname: `/article/${encodeURIComponent(article.id)}`,
            pathname: `/article/X`,
            state: {"article" : article}
        });
    }
    return (
        <Row>
            { articles.map( (article,key) => {
                return (
                        <Col xl={4} key={key}>
                                <Card className="clickable" onClick = {() => RedirectToArticle(article)} >
                                    <Container fluid="xl">
                                            <Card.Title style={{fontStyle: "italic"}}>
                                                {article.name === ""? article.img_url : article.name}
                                            </Card.Title>
                                            <Image className="my-card-Img" src= {article.img_url} thumbnail fluid/>
                                    </Container>
                                </Card>
                        </Col>
                );
            })}
        </Row>
    );
}

export default withRouter(ArticleCards);