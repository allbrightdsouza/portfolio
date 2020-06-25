import React from 'react';
const { Container } = require("react-bootstrap");

const ArticlePage = (props) => {
    const article_name = props.match.params.name;

    const RenderBody = (name) => {
        switch(name) {
            case "X":
                return (<h2>
                    It works
                </h2>);
              // code block
            case "Y":
              // code block
              break;
            default:
                props.history.push({
                    pathname: `/error`,
                });
              // code block
        }
    }
    return (
        <Container>
            <h1>{article_name}</h1>
            {RenderBody(article_name)}
        </Container>
    )
} 

export default ArticlePage;