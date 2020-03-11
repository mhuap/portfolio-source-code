import React from 'react';
import { InfoList, InfoLine } from "../components/projectInfo.js";
import '../components/index.css';
import '../components/project.scss';
import filler from '../images/filler.jpeg';

function ProjectHeader({title, date, description, team, role, context, techs, award, featuredimage}) {
  return (
    <div className="project-header">
      <div className='project-header--top'>
        <div>
          <h1>{title}</h1>
          <p className='project-date'>{date}</p>
        </div>
        <h2>{description} </h2>
      </div>
      <div className='project-header--info'>
        <div className='project-header--info-left'>
          <InfoLine name='Project Teammates' text={team}/>
          <InfoLine name='My Role' text={role}/>
          <InfoLine name='Context' text={context}/>
        </div>
        <div>
          {award === '' ? '' : <InfoLine name='Award' text={award}/>}
          <InfoList name="Skills" group={techs}/>
        </div>
      </div>

      <img className='featured-img' alt={title} src={featuredimage === '' ?  filler : require(`../images/${featuredimage}`)} />
    </div>
  )
}

export default ProjectHeader;
