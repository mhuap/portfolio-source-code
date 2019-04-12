import React from 'react';
import photo from '../images/photo.png';
import '../components/about.css';
import SEO from "../components/seo";

function About() {
  return (
    <>
      <SEO title="About" keywords={[`latinx`, `about`, `huapaya`,]} />
      <div className='full-for-center'>
        <div id='about' className='center'>
          <img src={photo} alt='Wes Huapaya'/>
          <div id='description'>
            <h1>about me</h1>
            <div id='info'>
              <p>
                <span>Name:</span>
                <span>Wes Huapaya</span>
              </p>
              <p>
                <span>Pronouns:</span>
                <span>He/They</span>
              </p>
            </div>
            <p>
              I'm passionate about using technology to tackle issues of social inequity
              that impact marginalized communities.
            </p>
            <p className="back"><a href="/">{'>'} back</a></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
