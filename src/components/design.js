import React from 'react';
import GalleryPanel from '../components/galleryPanel.js';
// import { StaticQuery, graphql } from "gatsby";
// import Img from "gatsby-image";

import steviePoster from '../images/gallery/stevie-mini.jpg';
import qo from '../images/gallery/qo.jpg'
import lwp from '../images/gallery/lwp.jpg';
import './design.scss'

function Design() {
  return (
    <div id='design'>
      <h2>selected_works <span className='brackets'>{'{'} graphic_design {'}'}</span></h2>
      <div className='page-content'>
        <div className='row'>

          <GalleryPanel
            title='Queer Orientation'
            subtitle={'University of Toronto\nSexual & Gender Diversity Office'}
            src={qo}
            url='queer-orientation'/>

          <GalleryPanel
            title='Lead With Pride'
            subtitle={'University of Toronto\nSexual & Gender Diversity Office'}
            src={lwp}
            url='lwp'/>

          <GalleryPanel
            title='Stevie Boebi Event'
            subtitle='LGBTOUT'
            src={steviePoster}
            url='stevieboebi'/>

        </div>
      </div>
    </div>
  );
}

export default Design;
