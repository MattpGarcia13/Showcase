import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function CardItem({ name, description, era, diet, img, dangerLevel, id }) {
  const navigate = useNavigate()

  function handleSelect() {
    const dinoToHunt = {
      name,
      description,
      era,
      diet,
      img,
      dangerLevel,
    };
    
    localStorage.setItem('dinoToHunt', JSON.stringify(dinoToHunt));
    navigate('../plannedHunt')
  }

  return (
    <>
      <div className='cards_item'>
        <div className='cards_item_link'>
          <figure className='cards_item_pic-wrap'>
            <img className='cards_item_img' alt='Creature Image' src={img} />
          </figure>
          <div className='cards_item_info'>
            <h5 id={id} className='cards_item_name'>Name: {name}</h5>
            <h5 className='cards_item_diet'>Diet: {diet}</h5>
            <h5 className='cards_item_era'>Era: {era}</h5>
            <h5 className='cards_item_description'>Description: {description}</h5>
            <button className='select-button' onClick={handleSelect}>
              Hunt Animal
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

CardItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  era: PropTypes.string.isRequired,
  diet: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  dangerLevel: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};


export default CardItem;
