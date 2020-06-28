import React from 'react';
import {Articles} from '../data/data'
const { Container } = require("react-bootstrap");

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
        <Container>
            <h1>{article.name}</h1>
            {RenderBody(article_name)}
        </Container>
    )
} 

export default ArticlePage;