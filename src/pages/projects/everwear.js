import React from 'react';
import Project from '../../components/project';

function Everwear() {
  return (
    <Project
      title='everwear'
      date='28.01.2020'
      description={`A web-app that suggests sustainable alternatives to clothes the user is already interested in buying.`}
      team='Dhruv Sharma, Andrew So, Emma Wai'
      role="Front-end developer and UX/UI Designer"
      context="Hackathon project at UofT Hacks VII"
      techs={["Google Cloud Functions", "ReactJS", "Conversational Form", "Node.js", "Puppeteer", "Adobe XD"]}
      featuredimage='everwear.gif'
      award='Best Use of Google Cloud: UofT Hacks'
    >

      <p>More info coming soon!</p>

    </Project>
  )
}

export default Everwear;
