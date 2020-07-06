import React from 'react';
import Project from '../../components/project';
import group from '../../images/ezpath/csc318top3.jpeg'


function Ezpath() {
  return (
    <Project
      title='ezPath'
      date='04.DEC.2019'
      description={`UI/UX design for a web-app to help people choose a school or program for post-secondary education.
      Users get personalized recommendations and have access to a selection of mentors.`}
      team='Anissa Baird, Aizah Bakhtiyar, Aleashea Valentine'
      role="User researcher, animator, video editor, and audio recorder/editor"
      context="Course project for CSC318 - Design of Interactive Computational Media"
      techs={["Axure R9", "Lo-fi prototypes", "iMovie", "Logic Pro X", "Adobe Illustrator"]}
      featuredimage='ezpath.gif'
      award='2nd place: IBM Design Competition'
    >
      <h3>Summary</h3>

      <p>We developed a high-fidelity prototype over the course of the semester through iterative user testing.</p>

      <p><strong>Problem Space:</strong> Choosing a post-secondary education path.</p>

      <p><strong>Target Audience:</strong> People going into post-secondary education (high school students or more mature students)</p>

      <p><strong>Process:</strong></p>
      <ol>
        <li>User research</li>
        <li>Low fidelity prototypes</li>
        <li>High fidelity prototypes</li>
      </ol>

      <h3>Final Presentation</h3>

      <div className='project-video'>
        <iframe title="ezPath" width="1440" height="597" src="https://www.youtube.com/embed/8iuQtE-30xg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <p>IBM Judges:</p>
      <ul>
        <li>Karel Vredenburg: Director, Global Academic Programs, Design</li>
        <li>Sarah Esmail: User Experience Designer</li>
        <li>Diana Kim: Campus Talent Acquisition Lead</li>
      </ul>

      <figure>
        <img src={group} alt='top 3 teams in Competition'/>
        <figcaption>Top 3 teams, judges, and Professor Ilona Posner</figcaption>
      </figure>


    </Project>
  )
}

export default Ezpath;
