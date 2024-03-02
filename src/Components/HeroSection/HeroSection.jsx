import React from 'react';
import '../App/App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className='hero-container'>
      <video src='/Videos/showcaseMod3dino.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn-secondary' buttonSize='btn-large'>GET STARTED</Button>
      </div>
    </div>
  );
}

export default HeroSection;
