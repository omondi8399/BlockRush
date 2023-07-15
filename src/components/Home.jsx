import React from 'react'
import NavBar from './NavBar'
import './style.css'
import Container from './Container'
import Section from './Section'

const Home = () => {
    return (
        <div className='home'>
            <NavBar />
            <Container />
            <Section />
        </div>
    )
}

export default Home