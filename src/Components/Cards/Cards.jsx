import React from 'react'
import './Cards.css';
import CardItem from '../Cards/CardItem'

function Cards({dinos}) {

    // function handleCardClick() {
    //     useNavigate('/')
    // }
    const dinoCards = dinos.map((dino) => {
        return (
        <CardItem
        // onClick={handleCardClick}
        description = {dino.description}
        diet = {dino.diet}
        era = {dino.era}
        name = {dino.name}
        />
        )
    })
    return (
        <div className='cards'>
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
