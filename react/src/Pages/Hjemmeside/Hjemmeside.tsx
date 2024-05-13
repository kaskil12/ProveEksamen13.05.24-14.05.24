import { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Header } from '../../prefabs/Header.tsx';
import { BigButton } from '../../prefabs/BigButton.tsx';
import { Background } from '../../prefabs/Background.tsx';

function Hjemmeside() {

  return (
    <>
    <Background />
      <Header></Header>
      {/* introduction part */}
      <div> 
        <div className='text-center font-bold text-9xl mt-[9rem] text-white'>
          <h1>Cyber Security Services</h1>
        </div>
        <div className='text-center mt-10 text-gray-400 max-w-screen-sm mx-auto'>
            <p>Cyber Security Services is a U.S. based cybersecurity company delivering services and managing cyber risk on behalf of our valued distribution and technology partners</p>
        </div>
        <button style={{background: 'linear-gradient(to bottom, #63a9ff, #004d7a)', fontSize: '20px', padding: '10px 40px'}} className='text-white mt-10 mx-auto block rounded-md mb-[11rem]'>Get Started</button>
      </div>
      <div>
        <BigButton></BigButton>
      </div>
    </>
  )
}

export default Hjemmeside
