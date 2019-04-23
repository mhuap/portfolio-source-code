import React from 'react';
import logo from '../images/logo.png'
import './Home.css'
import { Link, animateScroll as scroll } from "react-scroll";
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
          <h1>wes huapaya</h1>
      </div>
    </div>
    <div id='scroll'>
      <Link to="projects" smooth={true}>
        <span></span>
        <small id="scroll-text">scroll down</small>
      </Link>
    </div>
    </>
  );
}

export default Home;
