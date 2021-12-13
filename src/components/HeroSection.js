import React from 'react'
import '../App.css';
import { Button } from './Button'
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/giphy.mp4" autoPlay loop muted />
            <h1>START TODAY, NO EXCUSES!</h1>
            <p>No pain no gain.</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Tutorials Now <i className='far fa-play-circle'/></Button>
            </div>
        </div>
    );
}

export default HeroSection
