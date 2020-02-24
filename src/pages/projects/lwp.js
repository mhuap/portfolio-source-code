import React from 'react';
import Project from '../../components/project';

import brand from '../../images/lwp/lwpbrand.jpg';

function TweetImg() {
  return (
    <Project
      title='Lead With Pride'
      date='07.2019'
      description={`Logo for annual leadership conference for LGBTQ+ students.`}
      team='N/A'
      role="Graphic designer"
      context="Work for the University of Toronto - Sexual & Gender Diversity Office"
      techs={["Adobe Illustrator"]}
      featuredimage='gallery/lwp.jpg'
      award=''
    >

      <img src={brand} alt='Lead with Pride branding'/>

      <h3>The Process</h3>
      <p>The Lead With Pride co-chairs approached me asking me to design a logo
      in time for their <a href='https://www.facebook.com/events/329467091289285/'>Executive Jumpstart conference</a>.
      </p>

    </Project>
  )
}

export default TweetImg;
