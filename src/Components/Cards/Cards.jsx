import React, { useState } from 'react';
import './Cards.css';
import CardItem from '../Cards/CardItem';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

function Cards({ dinos }) {
  const [filteredDinos, setFilteredDinos] = useState([]);

  useEffect(() => {
    setFilteredDinos([...dinos]);
  }, [dinos]);

  function sortByHerbivores() {
    const herbivores = dinos.filter((dino) => dino.diet === 'Herbivore');
    setFilteredDinos(herbivores);
  }

  function sortByCarnivores() {
    const carnivores = dinos.filter((dino) => dino.diet === 'Carnivore');
    setFilteredDinos(carnivores);
  }

  function sortByRandom() {
    let randomIndex = Math.floor(Math.random() * dinos.length);
    let randomDino = dinos[randomIndex];
    setFilteredDinos([randomDino]);
  }

  const dinoCards = filteredDinos.map((dino, index) => {
    return (
      <CardItem
        key={dino.name}
        id={index}
        description={dino.description}
        diet={dino.diet}
        era={dino.era}
        name={dino.name}
        img={dino.img}
        dangerLevel={dino.dangerLevel}
      />
    );
  });

  return (
    <div className='cards'>
      <div className='sortButtons-container'>
        <button onClick={sortByHerbivores} className='sort-cards'>
          Sort by Herbivores!
        </button>
        <button onClick={sortByCarnivores} className='sort-cards'>
          Sort by Carnivores!
        </button>
        <button id='random-button' onClick={sortByRandom} className='sort-cards'>
          Random!
        </button>
      </div>
      <h1>Have a look at over 30 of the most popular mesozoic creatures!</h1>
      <div className='cards_container'>
        {dinoCards}
      </div>
    </div>
  );
}


Cards.propTypes = {
  dinos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    diet: PropTypes.string.isRequired,
    era: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    dangerLevel: PropTypes.number.isRequired,
  })).isRequired,
};



export default Cards;


