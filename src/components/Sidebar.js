import React from 'react'
import Navigation from './Navigation';
import {ReactComponent as Logout} from '../assets/icons/logout.svg';
import {ReactComponent as Logo} from '../assets/icons/logo.svg';
import './Sidebar.scss'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='logo'>
        <Logo/>
      </div>
      <Navigation />
      <div className='logout'>
        <button className='button button__round ripple'><Logout/></button>
      </div>
    </div>
  )
}

export default Sidebar
