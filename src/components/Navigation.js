import React from 'react'

import {ReactComponent as Home} from '../assets/icons/home.svg';
import {ReactComponent as Briefcase} from '../assets/icons/briefcase.svg';
import {ReactComponent as Bell} from '../assets/icons/bell.svg';
import {ReactComponent as Compass} from '../assets/icons/compass.svg';
import {ReactComponent as Gear} from '../assets/icons/gear.svg';


function Navigation() {
  return (
    <nav className='navigation'>
      <button className='button button__round ripple'><Home/></button>
      <button className='button button__round ripple'><Bell/></button>
      <button className='button button__round ripple'><Briefcase/></button>
      <button className='button button__round ripple'><Compass/></button>
      <button className='button button__round ripple'><Gear/></button>
    </nav>
  )
}

export default Navigation
