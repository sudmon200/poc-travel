import React from 'react'
import {ReactComponent as Heart} from '../assets/icons/heart.svg';
import {ReactComponent as Negative} from '../assets/icons/negative.svg'; 
import {ReactComponent as Upload} from '../assets/icons/upload.svg';

import './StickySelected.scss'

function StickySelected() {
  return (
    <div class='stickySelected'>
      <div class='selected'>
        <button className='button '><Negative/></button>
        <div class='selected__item'>1 Item Selected</div>
        <button className='button '><Heart/></button>
        <button className='button '><Upload/></button>
      </div>

    </div>
  )
}

export default StickySelected
