import React from 'react';
import {Articles} from '../data/data'
const { Container, Col, Row, Image } = require("react-bootstrap");

const ArticlePage = (props) => {
    const article_name = props.match.params.name;
    let article = null;
    if(props.location.state !== undefined)
    {
        article = props.location.state.article;
    }
    else {
        for(let i = 0 ; i < Articles.length; i++)
        {
            if(Articles[i].name === article_name)
            {
                article = Articles[i];
            }
        }

        if(article === null)
        {
            props.history.push({
                pathname: `/error`,
            });
        }
    }
    
    const RenderBody = (name) => {
    }
    return (
        <Container id="article-container">
            <h1>{article.name}</h1>
            <p>
                {article.body}
            </p>
            <Row>
            { article.img_urls.map((img,key) => {
                return (
                    <Col xl="6">
                        <Image src={img} key={key} className="img-article"/>
                    </Col>
                );
            })}
            </Row>
        </Container>
    )
} 

export default ArticlePage;