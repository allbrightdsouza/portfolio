import React from 'react'
import IntroSection from '../components/IntroSection'
import {Articles} from '../data/data'
import ArticleCards from '../components/ArticleCards'
import { Container } from 'react-bootstrap'
import SkillsSection from '../components/SkillsSection'

const Home = () => {
    return (
        <>
            <IntroSection />
            <SkillsSection />
            <div className="article-section">
                <Container className="article-container">
                    <ArticleCards articles = {Articles} />  
                </Container>
            </div>
        </>
    )
}

export default Home;