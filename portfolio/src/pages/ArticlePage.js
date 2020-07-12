import React from 'react';
import {Articles} from '../data/data'
import {ReactComponent as Github} from '../images/giithub.svg';
import ReactHtmlParser from 'react-html-parser'; 

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
        <>
         <Container className="article-page" style={{background: `linear-gradient(180deg, ${article.top_color} 50%, ${article.bottom_color} 50%)`}} fluid>
            <Container id="article-container">
                <Row id="article-header">
                    <Col>
                        <p>{article.name}</p>
                    </Col>
                    <Col lg={1} style={{marginTop: "-1%"}}>
                        <span><a href={article.github}><Github/></a></span>
                    </Col>
                   
                </Row>
                <Row>
                    <Col id="article-body" xs={{ order: 12, span:12 }} lg={{order:1, span:6}} > 
                        {ReactHtmlParser(article.body)}
                    </Col>
                    <Col id="images-row" xs={{ order: 1, span:12 }} lg={{order:12, span:6}} >                
                        <Container >     
                            <Row className="article-images" >               
                                { article.img_urls.map((img,key) => {
                                return (                    
                                    <Col xs={12} lg={12} style={{textAlign: "center"}} >
                                        <Image src={img} key={key} className="img-article"/>
                                    </Col>
                                );})}
                            </Row>
                        </Container>                                        
                    </Col>
                </Row>
                
                
                
            </Container>
             
         </Container>       
         
            
        
        
        
        </>
    )
} 

export default ArticlePage;