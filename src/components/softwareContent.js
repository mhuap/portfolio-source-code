import React from 'react';
import Function from '../components/function.js';
import './software.scss';

import tweetImg from '../images/tweetimg.jpg';
import cogx from '../images/cogx.jpg';

function SoftwareContent() {
  return (
    <div id='software' className='page-section'>
      <h2>selected_works <span className='brackets'>{'{'} software_development {'}'}</span></h2>
      <div id='functions' className='page-content'>
        <Function
          name='tweet-img'
          src={tweetImg}
          url='tweet-img'
          >
          <p>
            Web app converts tweets into images with colored backgrounds. Perfect for sharing tweets on Instagram.
          </p>
          <ul className='techs'>
            <li>Google Cloud Functions</li>
            <li>ReactJS</li>
            <li>Next.js</li>
            <li>cheerio.js</li>
            <li>html2canvas</li>
          </ul>
        </Function>

        <Function
          name='COGx'
          src={cogx}
          url='cogx'
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
