import React from 'react'
import './Cards.css';
import CardItem from '../Cards/CardItem'

function Cards({ dinos }) {
    function sortByHerbivores() {
        const dinoArray = [...dinos]
        dinoArray.filter(dino => dino.diet === 'Herbivore')
    }
    function sortByCarnivores() {
        const dinoArray = [...dinos]
        dinoArray.filter(dino => dino.diet === 'Carnivore')
    }
    function sortByRandom() {
        let randomIndex = Math.floor(Math.random() * dinos.length)
        let randomDino = dinos[randomIndex]
    }
    const dinoCards = dinos.map((dino) => {
        return (
            <CardItem
                key={dino.name}
                description={dino.description}
                diet={dino.diet}
                era={dino.era}
                name={dino.name}
                img={dino.img}
            />
        )
    })
    return (
        <div className='cards'>
            <div className='sortButtons-container'>
                <button onClick={sortByHerbivores} className='sort-cards'>Sort by Herbivores!</button>
                <button onClick={sortByCarnivores} className='sort-cards'>Sort by Carnivores!</button>
                <button onClick={sortByRandom} className='sort-cards'>Random!</button>
            </div>
            <h1>Have a look at over 30 of the most popular mesozoic creatures!</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    {dinoCards}
                </div>
            </div>
        </div>
    );
}

export default Cards;
