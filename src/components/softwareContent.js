import React from 'react';
import Function from '../components/function.js';
import './software.scss';

import tweetImg from '../images/tweetimg.jpg';
import cogx from '../images/cogx.jpg';
import everwearGif from '../images/everwear.gif';
import ezPathGif from '../images/ezpath.gif';

function SoftwareContent() {
  return (
    <div id='software' className='page-section'>
      <h2>selected_works <span className='brackets'>{'{'} software_development {'}'}</span></h2>
      <div id='functions' className='page-content'>

        <Function
          name='ezPath'
          src={ezPathGif}
          url='ezpath'
          award='2nd place: IBM Design Competition'
          descriptor='UX course project'
          >
          <p>
            A web-app to help people choose a school or program for post-secondary education.
            Users get personalized recommendations and have access to a selection of mentors.
          </p>
          <ul className='techs'>
            <li>Axure RP 9</li>
            <li>Lo-fi prototypes</li>
            <li>Adobe Illustrator</li>
            <li>iMovie</li>
            <li>Logic Pro X</li>
          </ul>
        </Function>

        <Function
          name='tweet-img'
          src={tweetImg}
          url='tweet-img'
          descriptor='Personal project'
          >
          <p>
            A web app that converts tweets into images with colored backgrounds. Perfect for sharing tweets on Instagram.
          </p>
          <ul className='techs'>
            <li>ReactJS</li>
            <li>Next.js</li>
            <li>Twitter API</li>
            <li>html2canvas</li>
          </ul>
        </Function>

        <Function
          name='everwear'
          src={everwearGif}
          url='everwear'
          award='Best Use of Google Cloud: UofT Hacks'
          descriptor='Hackathon project'
          >
          <p>
            A web-app that suggests sustainable alternatives to clothes the user is already interested in buying.
          </p>
          <ul className='techs'>
            <li>Google Cloud Functions</li>
            <li>Conversational Form</li>
            <li>ReactJS</li>
            <li>Node.js</li>
            <li>Puppeteer</li>
            <li>Adobe XD</li>
          </ul>

        </Function>

        <Function
          name='COGx'
          src={cogx}
          url='cogx'
          descriptor='Personal project'
          >
          <p>
            A redesign for COGx's website, with a more modern, consistent design system and copy tailored for readability.
          </p>
          <ul className='techs'>
            <li>Adobe XD</li>
          </ul>
        </Function>

      </div>
    </div>
  );
}

export default SoftwareContent;
