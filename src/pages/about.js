import React from 'react';
import photo from '../images/photo.png';
import '../components/about.css';
import SEO from "../components/seo";
import SocialFooter from "../components/SocialFooter";

function About() {
  return (
    <div className="container">
      <SEO title="About" keywords={[`latinx`, `about`, `huapaya`,]} />
      <div className='full-for-center'>
        <div id='about' className='center'>
          <div id='about-content'>
            <img src={photo} alt='Matias Huapaya'/>
            <div id='description'>
              <h1>about me</h1>
              <div id='info'>
                <p>
                  <span>Name:</span>
                  <span>Matias Huapaya</span>
                </p>
                <p>
                  <span>Pronouns:</span>
                  <span>He/They</span>
                </p>
              </div>
              <p>
                I'm a programmer who's passionate about approaching tech through
                an anti-oppressive, intersectional lens.
              </p>
              <p>
                Also, I'm a cat person.
              </p>
              <p className="back"><a href="/">{'>'} back</a></p>
            </div>
          </div>
          <SocialFooter />
        </div>
      </div>
    </div>
  );
}

export default About;
