import React from 'react'
import './Cards.css';
import CardItem from '../Cards/CardItem'

function Cards({ dinos }) {
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
                <button className='sort-cards'>Sort by Herbivores!</button>
                <button className='sort-cards'>Sort by Carnivores!</button>
                <button className='sort-cards'>Random!</button>
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
