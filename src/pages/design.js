import React from 'react';
import steviePoster from '../images/gallery/stevie-poster.png';
// import stevieBanner from '../images/gallery/stevie-banner.png';
import albumCover from '../images/gallery/album-no-text.jpg';
import invisabilities from '../images/gallery/invisabilities.png';
import cssu from '../images/gallery/justtable.png';
import lwp from '../images/gallery/leadwithpride.png';
import self from '../images/gallery/self-portrait.png';

class Design extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='design'>
        <div className='gallery-col'>
          <img src={steviePoster} alt='Poster for LGBTOUT'/>
          <img src={cssu} alt='Header for CSSU poster'/>
        </div>
        <div id='mid-col' className='gallery-col'>
          <img src={self} alt='Self-portrait'/>
          <img src={albumCover} alt='original album cover'/>
        </div>
        <div className='gallery-col'>
          <img src={lwp} alt='Lead With Pride'/>
          <img src={invisabilities} alt='Poster for Invisabilities'/>
        </div>
      </div>
    );
  }
}
export default Design
