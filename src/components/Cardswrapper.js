import React from 'react'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
import image5 from '../assets/images/image5.png'
import image6 from '../assets/images/image6.png'
import image7 from '../assets/images/image7.png'
import image8 from '../assets/images/image8.png'

import {ReactComponent as Message} from '../assets/icons/message-square.svg';
import {ReactComponent as Heart} from '../assets/icons/heart.svg';
import {ReactComponent as Checkmark} from '../assets/icons/checkmark.svg';

import './Card.scss'

function Cardswrapper() {
  return (
    <div className='cardsWrapper'>
      <div className='card'>
        <img src={image1} className='card__thumbnail' alt='City 1'/>
        <div className='tags'>
          <span className='tag'>Wellington</span><span className='tag'>Tianjin</span>
        </div>
        <div className='card__content'>
          <h2 className='card__title'>
            Khartoum
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='card__icon'>
          <button className='button '><Message/></button>
          <button className='button '><Heart/></button>
        </div>
      </div>

      <div className='card'>
        <img src={image3} className='card__thumbnail' alt='City 1'/>
        <div className='tags'>
          <span className='tag'>Puebla</span>
        </div>
        <div className='card__content'>
          <h2 className='card__title'>
            Fairbanks
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor consectetur enim, non laoreet massa lacinia eget. Sed porttitor consectetur enim, non  Quisque et velit auctor quam suscipit
          </p>
        </div>
        <div className='card__icon'>
          <button className='button '><Message/></button>
          <button className='button '><Heart/></button>
        </div>
      </div>

      <div className='card active'>
        <button className='button checkmark'><Checkmark/></button>
        <img src={image2} className='card__thumbnail' alt='City 1'/>
        <div className='tags'>
          <span className='tag'>Saltlake City</span><span className='tag'>Seville</span>
        </div>
        <div className='card__content'>
          <h2 className='card__title'>
            Santa Clara
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor suscipit
          </p>
        </div>
        <div className='card__icon'>
          <button className='button '><Message/></button>
          <button className='button '><Heart/></button>
        </div>
      </div>

      <div className='card'>
        <img src={image4} className='card__thumbnail' alt='City 1'/>
        <div className='tags'>
          <span className='tag'>Sacremento</span><span className='tag'>Osaka</span><span className='tag'>Astana</span>
        </div>
        <div className='card__content'>
          <h2 className='card__title'>
            Sofia
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor consectetur enim, non laoreet massa lacinia eget. Quisque et velit auctor quam suscipit
          </p>
        </div>
        <div className='card__icon'>
          <button className='button '><Message/></button>
          <button className='button '><Heart/></button>
        </div>
      </div>

      <div className='card'>
        <img src={image5} className='card__thumbnail' alt='City 1'/>
        <div className='tags'>
          <span className='tag'>Tag 1</span><span className='tag'>Tag 2</span>
        </div>
        <div className='card__content'>
          <h2 className='card__title'>
            Bengaluru
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor consectetur enim, non laoreet massa lacinia eget. Quisque et velit auctor quam suscipit
          </p>
        </div>
        <div className='card__icon'>
          <button className='button '><Message/></button>
          <button className='button '><Heart/></button>
        </div>
      </div>

      <div className='card'>
        <img src={image6} className='card__thumbnail' alt='City 1'/>
        <div className='tags'>
          <span className='tag'>Tag 1</span><span className='tag'>Tag 2</span>
        </div>
        <div className='card__content'>
          <h2 className='card__title'>
            Pune
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor consectetur enim.
          </p>
        </div>
        <div className='card__icon'>
          <button className='button '><Message/></button>
          <button className='button '><Heart/></button>
        </div>
      </div>

      <div className='card'>
        <img src={image7} className='card__thumbnail' alt='City 1'/>
        <div className='tags'>
          <span className='tag'>Tag 1</span><span className='tag'>Tag 2</span>
        </div>
        <div className='card__content'>
          <h2 className='card__title'>
            Belfast
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor consectetur enim, non laoreet massa lacinia eget. Quisque et velit auctor quam suscipit
          </p>
        </div>
        <div className='card__icon'>
          <button className='button '><Message/></button>
          <button className='button '><Heart/></button>
        </div>
      </div>

      <div className='card'>
        <img src={image8} className='card__thumbnail' alt='City 1'/>
        <div className='tags'>
          <span className='tag'>Tag 1</span><span className='tag'>Tag 2</span>
        </div>
        <div className='card__content'>
          <h2 className='card__title'>
            Portland
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor consectetur enim, non laoreet massa lacinia eget. Quisque et velit auctor quam suscipit
          </p>
        </div>
        <div className='card__icon'>
          <button className='button '><Message/></button>
          <button className='button '><Heart/></button>
        </div>
      </div>

    </div>
  )
}

export default Cardswrapper
