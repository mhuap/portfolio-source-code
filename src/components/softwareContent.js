import React from 'react';
import Function from '../components/function.js';
import './software.scss';

function SoftwareContent() {
  return (
    <div id='software' className='page-section'>
      <h2>selected_works <span className='brackets'>{'{'} software_development {'}'}</span></h2>
      <div id='functions' className='page-content'>
        <Function
          name='tweet-img'
          src='tweetimg.jpg'
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
          name='SmartFleet'
          src='smartfleet.gif'
          url='smartfleet'
          >
          <p>
            A car fleet management system for B2B use. Managers assign tasks to drivers,
            remotely give them access to the car, and keep track of their location on the job.
          </p>
          <ul className='techs'>
            <li>Google Maps Platform</li>
            <li>Flask</li>
            <li>SmartCar API</li>
            <li>Javascript</li>
            <li>HTML/CSS</li>
          </ul>
        </Function>

        <Function
          name='COGx'
          src='cogx.jpg'
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
