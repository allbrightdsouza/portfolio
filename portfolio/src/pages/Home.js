import React from 'react'
import IntroSection from '../components/IntroSection'
import {Articles} from '../data/data'
import ArticleCards from '../components/ArticleCards'
import { Container } from 'react-bootstrap'

const Home = () => {
    return (
        <>
            <IntroSection />
            <Container className="article-section">
                <ArticleCards articles = {Articles} />  
            </Container>
        </>
    )
}

export default Home;