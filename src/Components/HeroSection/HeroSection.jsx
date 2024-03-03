import React from 'react';
import '../App/App.css';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate()
  
  function handleClick(){
    navigate('./planningHunt')
  }

  return (
    <div className='hero-container'>
      <video src='/Videos/showcaseMod3dino.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <button onClick={handleClick} className='btn btn-primary btn-secondary btn-meduim' buttonStyle='btn-secondary' buttonSize='btn-large'>GET STARTED</button>
      </div>
    </div>
  );
}

export default HeroSection;
