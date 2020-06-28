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
        <>
            <h2 className="section-title"> My Work </h2>
                <Row>
                    { articles.map( (article,key) => {
                        return (
                                <Col lg="4" md="6" key={key}>
                                        <Card className="clickable" onClick = {() => RedirectToArticle(article)} >
                                            <Container>
                                                    <Card.Title style={{fontStyle: "italic"}}>
                                                        {article.name === ""? article.img_url : article.name}
                                                    </Card.Title>
                                                    <Container>
                                                        <Image className="my-card-Img" src= {article.img_urls[0]} thumbnail fluid/>
                                                    </Container>
                                            </Container>
                                        </Card>
                                </Col>
                        );
                    })}
                </Row>
        </>
    );
}

export default withRouter(ArticleCards);