import React from 'react'

function CardItem({name, description, era, diet}) {
    return (
      <>
        <li className='cards_item'>
          <div className='cards_item_link'>
            <figure className='cards_item_pic-wrap'>
              <img
                className='cards_item_img'
                alt='Creature Image'
                // src={img}
              />
            </figure>
            <div className='cards_item_info'>
              <h5 className='cards_item_text'>Name: {name}</h5>
              <h5 className='cards_item_text'>Diet: {diet}</h5>
              <h5 className='cards_item_text'>Era: {era}</h5>
              <h5 className='cards_item_text'>Description: {description}</h5>
            </div>
          </div>
        </li>
      </>
    );
  }
  
  export default CardItem;
