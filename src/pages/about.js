import React from 'react';
import photo from '../images/photo.png';
import '../components/about.css';

function About() {
  return (
    <div className='full-for-center'>
      <div id='about' className='center'>
        <img src={photo} alt='Wes Huapaya'/>
        <div id='description'>
          <h1>about me</h1>
          <div id='info'>
            <p>Name: Wes Huapaya</p>
            <p>Pronouns: He/him or they/them</p>
          </div>
          <p>
            I'm passionate about using technology to tackle issues of social inequity
            that impact marginalized communities, such as LGBTQ+ folks and BIPOC.
          </p>
          <p><a href="/">{'>'} Back to main</a></p>
        </div>
      </div>
    </div>
  );
}

export default About;
