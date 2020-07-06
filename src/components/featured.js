import React from 'react';
import { Link } from "gatsby";
import Reward from './reward.js'
import './featured.scss';
import './software.scss';

import filler from '../images/filler.jpeg';

function Featured() {
  return (
    <div className='full-bg'>
      <div id='featured' className='page-section'>

        <h2>featured <span className='brackets'>{'{'} projects {'}'}</span></h2>

        <div id='featured-projects'>
          <FeaturedProject
            title='everwear'
            description='A web-app that suggests sustainable alternatives to clothes the user is already interested in buying.'
            award='Best Use of Google Cloud: UofT Hacks'
            src='everwear.gif'
            url='everwear'
          >

            <ul className='techs'>
              <li>Google Cloud Functions</li>
              <li>Conversational Form</li>
              <li>ReactJS</li>
              <li>Node.js</li>
              <li>Puppeteer</li>
              <li>Adobe XD</li>
            </ul>

          </FeaturedProject>

          <FeaturedProject
            title='ezPath'
            description='A web-app to help people choose a school or program for post-secondary education. Users get personalized recommendations and have access to a selection of mentors.'
            award='2nd place: IBM Design Competition'
            src='ezpath.gif'
            url='ezpath'
          >
            <ul className='techs'>
              <li>Axure RP 9</li>
              <li>Lo-fi prototypes</li>
              <li>Adobe Illustrator</li>
              <li>iMovie</li>
              <li>Logic Pro X</li>
            </ul>

          </FeaturedProject>

        </div>
      </div>
    </div>
  );
}

function FeaturedProject({ title, description, award, src, url, children }) {
  const path = '/projects/' + url + '/';

  return (
    <Link className='featured-proj' to={path}>
      <div className='img-badge'>
        <div className='tag'>
          <div className='reward'>
            <Reward />
          </div>
          <span>{award}</span>
        </div>
        <img alt={title} src={src === '' ? filler : require(`../images/${src}`)}/>
      </div>

      <div className='featured-text'>
        <h3 className='highlight'>{title}</h3>
        <p>{description}</p>
      </div>

      {children}

    </Link>
  );
}

export default Featured;
