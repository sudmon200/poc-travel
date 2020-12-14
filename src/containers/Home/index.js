import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header';
import Cardswrapper from '../../components/Cardswrapper';

function Home() {
  return (
    <div className='body'>
        <Sidebar />

        <div className='content'>
          <Header />
          <Cardswrapper />
        </div>
    </div>
  )
}

export default Home
