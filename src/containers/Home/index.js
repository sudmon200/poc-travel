import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header';
import Cardswrapper from '../../components/Cardswrapper';
import StickySelected from '../../components/StickySelected';

function Home() {
  return (
    <div className='body'>
        <Sidebar />
        <div className='content'>
          <Header />
          <Cardswrapper />
        </div>
        <StickySelected />
    </div>
  )
}

export default Home
