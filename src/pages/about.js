import React from 'react';
import photo from '../images/about-me.jpg';
import '../components/about.scss';

import SEO from "../components/seo";
import PageTemplate from '../components/PageTemplate';
import { InfoList } from "../components/projectInfo.js";

function About() {
  const techLangs = ["Python", "HTML5/CSS3", "Javascript",  "Java", "C", "C#", "SQL"];
  const devTools = ["Bootstrap", "ReactJS", "Flask", "Gatsby", "JDBC", "MongoDB", "Unity3D", "Wordpress"];
  const designTools = ["Adobe Illustrator", "Adobe After Effects", "Inkscape"];
  const branding = ["Logo design", "Brand identity", "Poster design", "Social media banners"];
  const other = ["Audio recording + editing", "Video editing", "Spanish speaking + writing"];

  const lgbtout = ["Drop-In-Center Volunteer (2016-2019)", "Administrative Director (2019-2020)"]
  const newpride = ["Finance Director (2019-2020)"]
  // const other2 = ["Lead With Pride organizing committee member (2016-2017)"]

  return (
    <>
      <SEO title="About Me" keywords={[`latinx`, `about`, `huapaya`,]} />
      <PageTemplate>

        <div id='about-header' className='page-section'>
          <div id='description'>
            <h1>About me</h1>
            <h2>I'm Matias Huapaya (<a href='https://www.mypronouns.org/'>he/him</a>).</h2>
            <p>

            </p>
            <p>
              I am currently an undergraduate student at the University of Toronto
              studying Computer Science and Sexual Diversity Studies.
            </p>
            <p>
              Some other things about me: <br/>
              🇵🇪 I'm Peruvian but also a <a href="https://en.wikipedia.org/wiki/Third_culture_kid">Third Culture Kid</a> <br/>
              🌈 I volunteer with LGBTQ+ groups on campus <br/>
              🎸 I play guitar, sing, and occasionally write songs <br/>
              🖖🏽 I'm a <a href='https://en.wikipedia.org/wiki/Nerdfighteria'>nerdfighter</a> <br/>
              🎮 I play Fortnite <br/>
              😻 I love cats
            </p>
          </div>
          <img src={photo} alt='Matias Huapaya'/>
        </div>

        <div id='about-skills' className='page-section'>
          <h2>skills</h2>
          <div className='listgroup'>
            <InfoList name='Technical Languages' group={techLangs}/>
            <InfoList name='Development Tools' group={devTools}/>
            <InfoList name='Design Tools'  group={designTools}/>
            <InfoList name='Miscellaneous'  group={other}/>
          </div>
        </div>

      </PageTemplate>
    </>
  );
}

export default About;
