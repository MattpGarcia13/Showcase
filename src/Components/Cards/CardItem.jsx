import React from 'react';
import { useNavigate } from 'react-router-dom';
function CardItem({ name, description, era, diet, img, dangerLevel }) {
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
            <h5 className='cards_item_text'>Name: {name}</h5>
            <h5 className='cards_item_text'>Diet: {diet}</h5>
            <h5 className='cards_item_text'>Era: {era}</h5>
            <h5 className='cards_item_text'>Description: {description}</h5>
            <button className='select-button' onClick={handleSelect}>
              Hunt Animal
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardItem;
