import './PlannedHunt.css';
import React, { useEffect, useState } from 'react';

const PlannedHunt = () => {
  const [dinos, setDinos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedDino = localStorage.getItem('dinoToHunt');

    if (storedDino) {
      try {
        const dinoData = JSON.parse(storedDino);

        setDinos([dinoData]);

        setLoading(false);
      } catch (parseError) {
        setError('Error parsing dinosaur information from local storage.');
      }
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Planned Hunt</h1>
      <ul>
        {dinos.map((dino, index) => (
          <div className='plannedhunt-section' key={index}>
            <img src={dino.img} alt={dino.name} />
            <h2>{dino.name}</h2>
            <p>Description: {dino.description}</p>
            <p>Era: {dino.era}</p>
            <p>Diet: {dino.diet}</p>
            <h1>Danger level: {dino.dangerLevel}</h1>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PlannedHunt;
