import React from 'react';
import Project from '../../components/project';
import fb from '../../images/stevie/fb screenshot.png';
import poster from '../../images/stevie/stevie-poster.png';

function Stevie() {
  return (
    <Project
      title='Stevie Boebi'
      date='MAR.2019'
      description={`Print and digital promotional materials for a Stevie Boebi's presentation at the University of Toronto.`}
      team='N/A'
      role="Graphic Designer"
      context="Work For LGBTOUT"
      techs={["Poster design", "Adobe Illustrator"]}
      featuredimage='gallery/stevie-mini.jpg'
      award=''
    >

      <figure>
        <img src={poster} alt='Stevie Boebi print poster'/>
        <figcaption>Poster for print</figcaption>
      </figure>

      <figure>
        <img src={fb} alt='Digital event banner in use'/>
        <figcaption>Digital event banner in use</figcaption>
      </figure>

    </Project>
  )
}

export default Stevie;
