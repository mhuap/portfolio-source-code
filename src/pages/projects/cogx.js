import React from 'react';
import Project from '../../components/project';

function TweetImg() {
  return (
    <Project
      title='COGx'
      date='27.08.2019'
      description={`A redesign for COGx's website, with a more modern, consistent design system and copy tailored for readability.`}
      team='N/A'
      role="UI/UX Designer"
      context="Personal project"
      techs={["Adobe XD"]}
      featuredimage='cogx.jpg'
      award=''
    >

      <p>More info coming soon!</p>

    </Project>
  )
}

export default TweetImg;
