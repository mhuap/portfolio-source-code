import React from 'react';
// import withSizes from 'react-sizes';
import face from '../images/full-portrait.png'
// import { Link} from "react-scroll";
import './Home.scss'
// import Projects from './projects.js';

function Home() {

  return (
    <div id='home' className='page-section'>
      <div id='drawing'>
      <img src={face} alt='cartoon drawing of matias'/>
      <div >
        <h1>Hey, I'm Matias.</h1>
        <h2 id='home-subtitle'>I'm a <a href="#software" className='highlight'>software developer</a> + <a href="#design" className='highlight'>designer</a>.</h2>
        <p>
          I build things by focusing on usability and aesthetics,
          and I’m passionate about approaching tech through an anti-oppressive, intersectional lens.
        </p>
      </div>
      </div>
    </div>
  );
}

export default Home;
