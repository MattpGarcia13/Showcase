import React from 'react';
import '../App/App.css';
import { useEffect, useState } from 'react';
import HeroSection from '../HeroSection/HeroSection';

const Home = () => {

  const [dinos, setDinos] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/dino')
      .then(response => response.json())
      .then(data => setDinos(data.dinos))
      .catch(error => console.log(error))



  }, [])
  console.log(dinos)
  return (
    <div>
      <HeroSection />
    </div>
  );
}

export default Home;
