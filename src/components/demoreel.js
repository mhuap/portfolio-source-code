import React from 'react';
import GalleryPanel from '../components/galleryPanel.js';
// import { StaticQuery, graphql } from "gatsby";
// width="640" height="360"


import './design.scss'

function DemoReel() {
  return (
    <div id='demo' className='page-section'>
      <div className='page-content'>
        <div className='project-video'>

          <iframe src="https://player.vimeo.com/video/424451654" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>

        </div>
      </div>
    </div>
  );
}

export default DemoReel;
