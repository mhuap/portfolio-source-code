import React from 'react';
import Project from '../../components/project';

function SmartFleet() {
  return (
    <Project
      title='SmartFleet'
      date='28.01.2020'
      description={`A car fleet management system for B2B use. Managers assign tasks to drivers,
      remotely give them access to the car, and keep track of their location on the job.`}
      team='Michael Chen, Bryan Liu, Ming Xu'
      role="Backend developer"
      context="Hackathon project for UofT Hacks VI"
      techs={["Bootstrap", "Flask", "SmartCar API", "HTML/CSS", "Javascript", "Google Maps Platform"]}
      featuredimage='smartfleet.gif'
      award=''
    >

      <p>More info coming soon!</p>

    </Project>
  )
}

export default SmartFleet;
