import React from 'react'
import { NavLink } from 'react-router-dom';

function CardItem(props) {
    return (
      <>
        <li className='cards_item'>
          <NavLink className='cards_item_link' to={props.path}>
            <figure className='cards_item_pic-wrap' data-category={props.label}>
              <img
                className='cards_item_img'
                alt='Creature Image'
                src={props.src}
              />
            </figure>
            <div className='cards_item_info'>
              <h5 className='cards_item_text'>{props.text}</h5>
            </div>
          </NavLink>
        </li>
      </>
    );
  }
  
  export default CardItem;
