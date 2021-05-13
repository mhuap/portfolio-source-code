import React from 'react';
import Project from '../../components/project';
import cogx from '../../images/cogx.jpg';

function TweetImg() {
  return (
    <Project
      title='COGx'
      date='AUG.2019'
      description={`A redesign for COGx's website, with a more modern, consistent design system and copy tailored for readability.`}
      team='N/A'
      role="UI/UX Designer"
      context="Personal project"
      techs={["Adobe XD", "Copywriting", "UI/UX Design"]}
      featuredimage={cogx}
      award=''
    >

      <p>More info coming soon!</p>

    </Project>
  )
}

export default TweetImg;
