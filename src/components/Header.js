import React from 'react'
import {ReactComponent as Gridview} from '../assets/icons/grid-view-icon.svg';
import {ReactComponent as Listview} from '../assets/icons/list-view-icon.svg';

import './Header.scss'

function Header() {
  return (
    <header  className='header'>
      <div className='heading'>
        <h1>Discover great place to visit</h1>
      </div>
      <div className='changeView'>
        <button className='button button__round gridView active'><Gridview/></button>
        <button className='button button__round listView'><Listview/></button>
      </div>
    </header>
  )
}

export default Header
