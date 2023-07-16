import React from 'react'
import NavBar from './NavBar'
import './style.css'
import Container from './Container'
import Section from './Section'
import Testimonials from './Testimonials'
import FAQ from './FAQ'

const Home = () => {
    return (
        <div className='home'>
            <NavBar />
            <Container />
            <Section />
            <Testimonials />
            <FAQ />
        </div>
    )
}

export default Home