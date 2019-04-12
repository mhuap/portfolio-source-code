import React from 'react';
import logo from '../images/logo.png'
import './Home.css'
// import Projects from './projects.js';

function Home() {
  return (
    <>
    <a id='about-link' href='/about'>Learn more about me!</a>
    <div id='home' className='full-for-center'>
      <div className='center'>
          <img src={logo} alt='cute ghost logo'/>
          <p id='hi'>
            Hi, I'm
          </p>
          <h1>wes<span id='accent'>.</span>huapaya</h1>
      </div>
    </div>
    </>
  );
}

export default Home;
