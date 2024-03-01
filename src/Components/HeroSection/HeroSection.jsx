import React from 'react';
import '../App/App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted />
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn-secondary' buttonSize='btn-large'>GET STARTED</Button>
                <Button className='btns' buttonStyle='btn-primary' buttonSize='btn-large' onClick={console.log('hey')}>WATCH TRAILER
                    <ion-icon name="play-circle-outline" /></Button>
            </div>
        </div>
    );
}

export default HeroSection;