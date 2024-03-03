import React, { useEffect, useState } from 'react';
import Cards from '../Cards/Cards';

function PlanningHunt() {
  const [dinos, setDinos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dino-backend.onrender.com/dino');
        const data = await response.json();
        setDinos(data.dinos);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
      <Cards dinos={dinos} />
    </div>
  );
}

export default PlanningHunt;
