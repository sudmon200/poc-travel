import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header';
import Cardswrapper from '../../components/Cardswrapper';
import StickySelected from '../../components/StickySelected';
import MobileHeader from '../../components/MobileHeader';
import MobileNav from '../../components/MobileNav';

function Home() {
  let width = window.innerWidth;
  return (
    <div className='body'>
        <Sidebar />
        <div className='content'>
          {width < 575 ?  <MobileHeader /> : ''}
          <Header />
          <Cardswrapper />
          <StickySelected />
          {width < 575 ?  <MobileNav /> : ''}
        </div>
    </div>
  )
}

export default Home
