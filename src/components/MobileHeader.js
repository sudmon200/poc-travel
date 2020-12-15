import React from 'react'
import {ReactComponent as Logo} from '../assets/icons/logo.svg';

import './MobileHeader.scss'

function MobileHeader() {
  return (
    <div className='mobileHeader'>
      <div className='logo'>
        <Logo/>
      </div>
    </div>
  )
}

export default MobileHeader
