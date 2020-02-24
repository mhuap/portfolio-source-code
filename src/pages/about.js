import React from 'react';
import photo from '../images/about-me.jpg';
import '../components/about.scss';

import SEO from "../components/seo";
import PageTemplate from '../components/PageTemplate';
import ToggleList from '../components/ToggleList';

function About() {
  const prototyping = ["Adobe XD", "Axure RP9", "Figma"];
  const toolsframe = ["Android Platform API", "Bootstrap", "Flask", "Gatsby", "JDBC", "MongoDB", "ReactJS", "Unity3D", "Wordpress"];
  const techs = ["Python", "Java", "C", "C#", "HTML5/CSS3", "Javascript", "SQL"];

  const tools = ["Adobe Illustrator", "Adobe After Effects", "Inkscape"];
  const branding = ["Logo design", "Brand identity", "Poster design", "Social media banners"];
  const other = ["2D animation", "Audio recording/editing", "Video editing"];

  const lgbtout = ["Drop-In-Center Volunteer (2016-2019)", "Administrative Director (2019-2020)"]
  const newpride = ["Finance Director (2019-2020)"]
  // const other2 = ["Lead With Pride organizing committee member (2016-2017)"]

  return (
    <>
      <SEO title="About Me" keywords={[`latinx`, `about`, `huapaya`,]} />
      <PageTemplate>

        <div id='about-header'>
          <div id='description'>
            <h1>About Me</h1>
            <h2>Hey, I'm Matias (<a href='https://www.mypronouns.org/'>he/him</a>).</h2>
            <p>
              I’m passionate about nurturing a culture of intersectionality and compassion in tech.
              Also, I’m a cat person and music nerd.
            </p>
            <p>
              I’m currently an undergraduate student at UofT studying Computer Science and Sexual Diversity Studies.
            </p>
          </div>
          <img src={photo} alt='Matias Huapaya'/>
        </div>

        <div id='about-skills'>
          <ToggleList
            title="skills: software_development"
            name1="Prototyping"
            name2="Tools + Frameworks"
            name3="Technical Languages"
            list1={prototyping}
            list2={toolsframe}
            list3={techs}
          />
          <ToggleList
            title="skills: graphic_design"
            name1="Tools"
            name2="Branding"
            name3="Other"
            list1={tools}
            list2={branding}
            list3={other}
          />
          <ToggleList
            title="volunteer_work"
            name1="LGBTOUT"
            name2="NewPRIDE"
            name3=""
            list1={lgbtout}
            list2={newpride}
            list3={[]}
          />
        </div>

      </PageTemplate>
    </>
  );
}

export default About;
